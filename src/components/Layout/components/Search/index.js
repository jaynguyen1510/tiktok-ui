import HeadlessTippy from "@tippyjs/react/headless";
import AccountItem from "~/components/AccountItem";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import * as searchService from "~/apiServiecs/searchService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper as PoperWarper } from "~/components/Poper";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "~/components/icon";
import { useEffect, useState, useRef } from "react";
import { useDebounce } from "~/Hook";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showReasult, setShowReasult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(debounced);

      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debounced]);

  const handelClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowReasult(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showReasult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PoperWarper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PoperWarper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm video hoặc người dùng"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowReasult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handelClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}

        <button className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

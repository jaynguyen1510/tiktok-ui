import HeadlessTippy from "@tippyjs/react/headless";
import AccountItem from "~/components/AccountItem";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper as PoperWarper } from "~/components/Poper";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "~/components/icon";
import { useEffect, useState, useRef } from "react";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showReasult, setShowReasult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
      });
  }, [searchValue]);

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

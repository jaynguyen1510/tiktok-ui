import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/Poper";

import Image from "~/components/Image";
import styles from "./SuggestedAccount.module.scss";
import AccountItemReview from "./AccountItemReview";

const cx = classNames.bind(styles);
function AccountItems({ data }) {
  const renderReview = (prop) => {
    return (
      <div tabIndex="-1" {...prop}>
        <PopperWrapper>
          <AccountItemReview data={data} />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        interactive
        offset={[-10, -5]}
        delay={[800, 0]}
        placement="bottom"
        render={renderReview}
      >
        <div className={cx("account-item")}>
          <Image
            className={cx("avatar")}
            src={data.avatar}
            alt={data.nickname}
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>{data.nickname}</strong>
              {data.tick && (
                <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
              )}
            </p>
            <p className={cx("name")}>
              {`${data.first_name}  ${data.last_name}`}
            </p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}
AccountItems.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItems;

// import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/Poper";

import styles from "./SuggestedAccount.module.scss";
import AccountItemReview from "./AccountItemReview";

const cx = classNames.bind(styles);
function AccountItems() {
  const renderReview = (prop) => {
    return (
      <div tabIndex="-1" {...prop}>
        <PopperWrapper>
          <AccountItemReview />
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
          <img
            className={cx("avatar")}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8daab5d6ebbe8ca1fcf5a6efdd574246.jpeg?lk3s=a5d48078&nonce=15663&refresh_token=3e3e725bb5e0282b726e201ec4eb851f&x-expires=1718258400&x-signature=mUv4kZIPQI8yQq9SujIs1hrQf%2B0%3D&shp=a5d48078&shcp=81f88b70"
            alt="avatar"
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>Nam Dep</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}> Nam </p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}
AccountItems.propTypes = {};

export default AccountItems;

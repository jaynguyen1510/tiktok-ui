import classNames from "classnames/bind";
import styles from "./AccountItemReview.module.scss"; //

import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItemReview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8daab5d6ebbe8ca1fcf5a6efdd574246.jpeg?lk3s=a5d48078&nonce=15663&refresh_token=3e3e725bb5e0282b726e201ec4eb851f&x-expires=1718258400&x-signature=mUv4kZIPQI8yQq9SujIs1hrQf%2B0%3D&shp=a5d48078&shcp=81f88b70"
          alt="Avatar"
        />

        <Button className={cx("follow-btn")} primary small>
          Follow
        </Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>Nam Dep</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}> Nam </p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Following</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Likes </span>
        </p>
      </div>
    </div>
  );
}

export default AccountItemReview;

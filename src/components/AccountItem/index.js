import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/317720382_877648576724940_8250332899106975008_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IXuE6GCfRYQQ7kNvgETt-bY&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYC_9dsCC5zyQ4bF9pZpA5brQ6MM-mZeKB8uFq5mwYiELA&oe=6657D94E"
        alt="user"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span> Trần Thị Thương Thương </span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>Trần Thị Thương Thương</span>
      </div>
    </div>
  );
}

export default AccountItem;

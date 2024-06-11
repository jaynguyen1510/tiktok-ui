import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccount.module.scss";
import AccountItems from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      <AccountItems />
      <AccountItems />
      <AccountItems />
      <p className={cx("more-btn")}>see all</p>
    </div>
  );
}

SuggestedAccount.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccount;

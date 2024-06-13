import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccount.module.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestedAccount({ label, data = [], onSeeAll }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      {data.map((account) => (
        <AccountItem key={account.id} data={account} />
      ))}

      <p className={cx("more-btn")} onClick={onSeeAll}>
        See More
      </p>
    </div>
  );
}

SuggestedAccount.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default SuggestedAccount;

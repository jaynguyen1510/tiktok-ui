import PropTypes from "prop-types";
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./Menu.modules.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate,
  });
  return (
    <Button
      className={classes}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}
MenuItem.protoTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;

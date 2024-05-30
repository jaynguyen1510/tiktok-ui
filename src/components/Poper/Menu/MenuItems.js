import Button from "~/components/Button";
import classNames from "classnames/bind";

import styles from "./Memnu.modules.scss";

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  console.log(data);
  return (
    <Button className={cx("menu-item")} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;

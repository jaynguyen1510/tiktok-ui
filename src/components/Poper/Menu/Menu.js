import classNames from "classnames/bind";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWarper } from "~/components/Poper";
import Header from "./Header";
import MenuItem from "./MenuItems";
import styles from "./Menu.modules.scss";
import { useState } from "react";

const cx = classNames.bind(styles);
const defaultFnc = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFnc,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      // console.log(item.children);
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handelBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderResult = (attrs) => (
    <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
      <PopperWarper className={cx("menu-popper")}>
        {history.length > 1 && (
          <Header title={current.title} onBack={handelBack} />
        )}
        <div className={cx("menu-body")}>{renderItems()}</div>
      </PopperWarper>
    </div>
  );
  // reset to first page
  const handelResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
      onHide={handelResetMenu}
    >
      {children}
    </Tippy>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Menu;

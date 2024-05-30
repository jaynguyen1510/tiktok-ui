import classNames from "classnames/bind";

import Tippy from "@tippyjs/react/headless";
import { Wrapper as PoperWarper } from "~/components/Poper";
import styles from "./Memnu.modules.scss";
import MenuItem from "./MenuItems";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PoperWarper className={cx("menu-poper")}>
            {renderItems()}
          </PoperWarper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

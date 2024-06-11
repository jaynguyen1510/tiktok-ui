import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from "~/components/icon";
import config from "~/config";
import SuggestedAccount from "~/components/SuggestedAccount";
const cx = classNames.bind(styles);
const Sidebar = () => {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For you"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        ></MenuItem>
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        ></MenuItem>
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        ></MenuItem>
      </Menu>
      <SuggestedAccount label="Suggested Account" />
      <SuggestedAccount label="Following Account" />
    </aside>
  );
};

export default Sidebar;

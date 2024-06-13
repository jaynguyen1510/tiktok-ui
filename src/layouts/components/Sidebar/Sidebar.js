import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from "~/components/icon";
import styles from "./Sidebar.module.scss";
import config from "~/config";
import SuggestedAccount from "~/components/SuggestedAccount";
import * as userService from "~/services/userService";
// import * as userFollowingService from "~/services/userFollowingService";

const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;

const Sidebar = () => {
  const [page, setPage] = useState(INIT_PAGE);
  const [suggestedUser, setSuggestedUser] = useState([]);
  // const [followingUser, setFollowingUser] = useState([]);

  useEffect(() => {
    const fetchSuggestedUsers = async () => {
      try {
        const suggestedData = await userService.getSuggested({
          page,
          perPage: PER_PAGE,
        });
        setSuggestedUser((prevSuggested) => [
          ...prevSuggested,
          ...suggestedData,
        ]);
      } catch (error) {
        console.error(
          "Error fetching suggested users:",
          error.response ? error.response.data : error.message
        );
      }
    };

    // const fetchFollowingUsers = async () => {
    //   try {
    //     const followingData = await userFollowingService.getFollowings({
    //       page: 1,
    //     });
    //     setFollowingUser((prevFollowing) => [
    //       ...prevFollowing,
    //       ...followingData,
    //     ]);
    //     console.log("followingData:", followingData);
    //   } catch (error) {
    //     console.error(
    //       "Error fetching following users:",
    //       error.response ? error.response.data : error.message
    //     );
    //   }
    // };

    fetchSuggestedUsers();
    // fetchFollowingUsers();
  }, [page]);

  const handleSeeAll = () => {
    setPage(page + 1);
  };

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
      <SuggestedAccount
        label="Suggested Account"
        data={suggestedUser}
        onSeeAll={handleSeeAll}
      />
      <SuggestedAccount label="Following Account" data={suggestedUser} />
    </aside>
  );
};

export default Sidebar;

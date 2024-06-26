import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "~/components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/icon";

import routesConfig from "~/config/routes";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import images from "~/asset/images";
import Menu from "~/components/Poper/Menu";
import Image from "~/components/Image";
import Search from "../Search";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "Change language",
    children: {
      title: "language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vn",
          title: "VietNam",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcut",
  },
];

function Header() {
  const currentUser = true;

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;

      default:
    }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View Profile",
      to: "/@myProfile",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
      separate: true,
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "LogOut",
      to: "/logout",
      separate: true,
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={routesConfig.home} className={cx("logo-link")}>
          <img src={images.logo} alt="TikTok" />
        </Link>

        <Search />
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload Video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Notification" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/50988168_895896207427532_3148602475582324736_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5S72l-FdrfQQ7kNvgG1utIo&_nc_ht=scontent-hkg4-1.xx&oh=00_AYD-QZvoXqApP0O-vTRK3vfpbmvVRdH0K8uKgxyGlFiTHQ&oe=66928215"
                alt="avatar"
                fallBack="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/428614087_2377110952639376_5609723601646363393_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QFAmsM4gpq8Q7kNvgG6ydJc&_nc_ht=scontent-hkg4-1.xx&oh=00_AYBOOUXPa4Ctto38R88ZeyM8avNdAHBwZrSXk0EfS5289g&oe=6670C31D"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

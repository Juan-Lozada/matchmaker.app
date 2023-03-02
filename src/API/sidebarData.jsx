import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  
  {
    title: "Dashboard",
    path: "/user/Profile",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Canchas",
    path: "/user/canchas",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Logout",
    path: "/",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  }
];

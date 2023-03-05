import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import * as VscIcons from "react-icons/vsc";
import  * as GiIcons from "react-icons/gi";

export const SidebarData = [
  
  {
    title: "Dashboard",
    path: "/user/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Profile",
    path: "/user/profile",
    icon: <VscIcons.VscAccount/>,
    cName: "nav-text"
  },
  {
    title: "Canchas",
    path: "/user/canchas",
    icon: <GiIcons.GiAbstract042 />,
    cName: "nav-text"
  },
  {
    title: "Logout",
    path: "/",
    icon: <TbIcons.TbLogout />,
    cName: "nav-text"
  }
];

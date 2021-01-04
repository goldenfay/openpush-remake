import React from "react";
import { ReactComponent as EditIcon } from "../../imgs/icons/menu/edit.svg";
import { ReactComponent as AccountIcon } from "../../imgs/icons/menu/account.svg";
import { ReactComponent as TrophyIcon } from "../../imgs/icons/menu/trophy.svg";
import { ReactComponent as AcheivementIcon } from "../../imgs/icons/menu/success.svg";
import { ReactComponent as SocialIcon } from "../../imgs/icons/menu/connection.svg";
import { ReactComponent as SettingsIcon } from "../../imgs/icons/menu/settings.svg";
import { ReactComponent as LogoutIcon } from "../../imgs/icons/menu/logout.svg";
const menu = [
    {
      title: "Edit profile",
      link: 'edit',
      icon: <EditIcon />,
    },
    {
      title: "Connect sweetclash account",
      link: '',
      icon: <AccountIcon />,
    },
    {
      title: "Achievements",
      link: 'achievements',
      icon: <TrophyIcon />,
    },
    {
      title: "Upgrade level",
      link: 'upgrade',
      icon: <AcheivementIcon />,
    },
    {
      title: "Social connection",
      link: 'social',
      icon: <SocialIcon />,
    },
    {
      title: "Settings",
      link: 'settings',
      icon: <SettingsIcon />,
    },
    {
      title: "Sign out",
      link: '',
      icon: <LogoutIcon />,
    },
  ];

  
  export default menu
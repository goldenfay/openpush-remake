import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as HomeIcon } from "../imgs/icons/nav/home.svg";
import { ReactComponent as CategoriesIcon } from "../imgs/icons/nav/categories.svg";
import { ReactComponent as WheelIcon } from "../imgs/icons/nav/wheel.svg";
import { ReactComponent as WalletIcon } from "../imgs/icons/nav/wallet.svg";
import { ReactComponent as ProfileIcon } from "../imgs/icons/nav/profile.svg";

import navItems from "../static/nav";
const navIcons = [
  <HomeIcon />,
  <CategoriesIcon />,
  <WheelIcon />,
  <WalletIcon />,
  <ProfileIcon />,
];

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  navLink: {
    textTransform: "capitalize",
  },
}));

function NavTabs(props) {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      {navItems.map((item, idx) => (
        <Link
          key={idx}
          underline="none"
          href={item.link}
          className={classes.navLink}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {navIcons[idx]}
            {item.title}
          </Box>
        </Link>
      ))}
    </Box>
  );
}

NavTabs.propTypes = {};

export default NavTabs;

import React from "react";
import PropTypes from "prop-types";
import {Link as BrowserLink} from "react-router-dom";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as HomeIcon } from "../imgs/icons/nav/home.svg";
import { ReactComponent as CategoriesIcon } from "../imgs/icons/nav/categories.svg";
import { ReactComponent as WheelIcon } from "../imgs/icons/nav/wheel.svg";
import { ReactComponent as WalletIcon } from "../imgs/icons/nav/wallet.svg";
import { ReactComponent as ProfileIcon } from "../imgs/icons/nav/profile.svg";

import navItems from "../static/nav";
import { Typography} from "@material-ui/core";
const navIcons = [
  <HomeIcon />,
  <CategoriesIcon />,
  <WheelIcon />,
  <WalletIcon />,
  <ProfileIcon />,
];

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('lg')]:{
      justifyContent: "flex-start",

    }
  },
  smOnly: {
    '& * ': {
      [theme.breakpoints.up('sm')]:{
        display: "none",
  
      }

    }
  },
  noLg: {
    '& * ': {
      [theme.breakpoints.up('lg')]:{
        display: "none",
  
      }

    }

  },
  navLink: {
    textTransform: "capitalize",
    display: 'block',
   
    '&.active *': {
      color: theme.palette.secondary.main
    },
    '&.active svg': {
      '& path': {
        fill: theme.palette.secondary.main
      }
    }
  },
  navLinkContainer: {
    // '& .active': {
    //   color: theme.palette.secondary.main
    // },
    '& *': {
      [theme.breakpoints.up('md')]:{
        marginLeft: theme.spacing(2),
      },
    },
    [theme.breakpoints.up('md')]:{
      flexDirection: "row",
    },
    [theme.breakpoints.up('lg')]:{
      marginLeft: theme.spacing(5)
    }
  }
}));

function NavTabs(props) {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      width={1}
    >
      {navItems.map((item, idx) => (
        <Link
          key={idx}
          underline="none"
          // href={item.link}
          className={`${classes.navLink} ${idx===2?"active":""} ${idx===0?classes.smOnly:idx===4?classes.noLg:""}  `}
          component={BrowserLink}
          to={item.link}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            className={classes.navLinkContainer}
          >
            <div>{navIcons[idx]}</div>
            <Typography  variant="caption" color="textSecondary"  >{item.title}</Typography> 
          </Box>
        </Link>
      ))}
    </Box>
  );
}

NavTabs.propTypes = {};

export default NavTabs;

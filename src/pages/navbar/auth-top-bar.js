import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar as TopBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles,useTheme,ThemeProvider } from "@material-ui/core/styles";
import { isWidthDown, isWidthUp } from "@material-ui/core/withWidth";

// Components
import NavTabs from "../../components/NavTabs";

const useStyles = makeStyles((theme) => ({
  topAppBar: {
    flexGrow: 1,
  },
  bottomAppBar: {
    top: "auto",
    // position: 'fixed',
    bottom: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navs: {
    justifySelf: "center",
    alignSelf: "center",
    width:  "100%"
  },
  rabbitsContainer: {
      maxHeight: "100%",
      

  },
  rabbitsImg: {
      maxHeight: "80%",
      marginLeft: theme.spacing(2)
  }
}));

function AppBar(props) {
    const {theme}=props
    console.log(theme)
  const classes = useStyles(theme);

  const [open, setOpen] = useState(false);

  return (
    <>
    <ThemeProvider theme={theme}>
      <div className={classes.topAppBar}>
        <TopBar position="static">
          <Toolbar >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.title}>
              <img src="/assets/imgs/toolbar_logo.png" alt="" />
            </div>
            <div className={classes.navs}>
                {isWidthUp("md", props.width) && <NavTabs {...props}/>}
            </div>
            <Box display="flex" flexDirection="row" alignItems="center" className={classes.rabbitsContainer}>
                <Typography>
                    {props.user.rabbits|| "28 000"}
                    

                </Typography>
                <img  src="/assets/dummy/main/rabbit.png" alt="Rabbits" className={classes.rabbitsImg} />
            </Box>
          </Toolbar>
        </TopBar>
      </div>
      {isWidthDown("sm", props.width) && (
        <div>
          <TopBar
            position="fixed"
            color="primary"
            className={classes.bottomAppBar}
          >
            <Toolbar>
              
              <Box display="flex" flexDirection="row" alignItems="end"  width={1}>
                <NavTabs {...props}/>
            </Box>
            </Toolbar>
          </TopBar>
        </div>
      )}
      </ThemeProvider>
    </>
  );
}

AppBar.propTypes = {
  width: PropTypes.string.isRequired,
};

export default AppBar;

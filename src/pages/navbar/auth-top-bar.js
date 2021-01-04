import React from "react";
import PropTypes from "prop-types";
import {Link as BrowserLink} from "react-router-dom";
import {
  AppBar as TopBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { isWidthDown, isWidthUp } from "@material-ui/core/withWidth";

// Components
import NavTabs from "../../components/NavTabs";
import Avatar from "../../components/Avatar";

const useStyles = makeStyles((theme) => ({
  topAppBar: {
    flexGrow: 1,
    
  },
  topBar: {
    [theme.breakpoints.up('xl')]: {
      
      padding: "0 20%"

    }
  },
  bottomAppBar: {
    top: "auto",
    // position: 'fixed',
    bottom: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  dropdownmenu: {
    minWidth: 300

  },
  dropdownmenuItem: {
    minWidth: 300

  },
  title: {
    flexGrow: 1,
  },
  navs: {
    justifySelf: "center",
    alignSelf: "center",
    width: "100%",
  },
  rabbitsContainer: {
    maxHeight: "100%",
    marginRight: theme.spacing(2)
  },
  rabbitsImg: {
    maxHeight: "80%",
    marginLeft: theme.spacing(2),
  },
}));

function AppBar(props) {
  const { theme } = props;
  const classes = useStyles(theme);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.topAppBar}>
          <TopBar position="static" className={classes.topBar}>
            <Toolbar>
              {/* <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton> */}
              <div className={classes.title}>
                <img src="/assets/imgs/toolbar_logo.png" alt="" />
              </div>
              <div className={classes.navs}>
                {isWidthUp("md", props.width) && <NavTabs {...props} />}
              </div>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                className={classes.rabbitsContainer}
              >
                <Typography>{props.user.rabbits || "28 000"}</Typography>
                <img
                  src="/assets/dummy/main/rabbit.png"
                  alt="Rabbits"
                  className={classes.rabbitsImg}
                />
              </Box>
              {/* Profile menu on the top, for large devices */}
              {isWidthUp("lg", props.width) && (
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  // className={classes.rabbitsContainer}
                >
                  <Button
                    aria-label="account dropdown"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                  >
                    <Avatar
                      style={{ maxHeight: "90%" }}
                      grade={props.user.badge}
                    />
                    <Typography>{props.user.email}</Typography>
                    <ArrowDropDownIcon />
                  </Button>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    className={classes.dropdownmenu}
                  >
                    <MenuItem className={classes.dropdownmenuItem} component={BrowserLink} to={'/profile'}>Profile</MenuItem>
                    <MenuItem className={classes.dropdownmenuItem} component={BrowserLink} to={'/profile/settings'}>Settings</MenuItem>
                    <MenuItem className={classes.dropdownmenuItem} component={BrowserLink} to={'/'}>Logout</MenuItem>
                  </Menu>
                </Box>
              )}
            </Toolbar>
          </TopBar>
        </div>
        {/* Bottom tab bar menu for small devices */}
        {isWidthDown("sm", props.width) && (
          <div>
            <TopBar
              position="fixed"
              color="primary"
              className={classes.bottomAppBar}
            >
              <Toolbar>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="end"
                  width={1}
                >
                  <NavTabs {...props} />
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

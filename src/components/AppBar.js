import React from "react";
import PropTypes from "prop-types";
import {
  AppBar as TopBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
// Component
import CustomModal from './CustomModal';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppBar(props) {
  const classes = useStyles();

  const [open,setOpen]=useState(false);
  const [page,setPage]=useState(<Login/>);
  const displayAuthPage=(page)=>{
    if(page==="login") setPage(<Login/>); else setPage(<Register/>)
    setOpen(true);
  }

  return (
    <div className={classes.root}>
      <TopBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <div  className={classes.title}>
            <img src="/assets/imgs/toolbar_logo.png" alt=""/>
          </div>

          {props.children}

          <Typography  className={classes.menuButton} component={Button} onClick={()=>displayAuthPage('login')}>
            Login
          </Typography>
          <Button color="secondary" variant="contained" onClick={()=>displayAuthPage('register')} >
            Register
          </Button>
        </Toolbar>
      </TopBar>
      <CustomModal 
      body={page}
      open={open}
      handleClose={()=>setOpen(false)}
      />
    </div>
  );
}

AppBar.propTypes = {};

export default AppBar;

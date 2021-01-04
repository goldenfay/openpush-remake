import React, {Suspense,lazy} from "react";
import { connect } from 'react-redux'
import {Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme, ThemeProvider } from "@material-ui/core/styles";
// Pages
import GuestAppBar from "../../components/AppBar";
// import AppBar from "../navbar/auth-top-bar";
import Footer from "../../components/Footer";

const AppBar= lazy(()=> import('../navbar/auth-top-bar'));
const useStyles = makeStyles((theme) => ({
  container: {
  
    [theme.breakpoints.up('xl')]: {
      fisplay: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-between'



    }

  },
  content: {
    margin: "auto",
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    [theme.breakpoints.up('xl')]: {
      padding: "0 20%"

    }
   
  },
  bglight: {
      backgroundColor: theme.palette.primary.light
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    position: 'rlative',
    paddingBottom: '30px',
    marginTop: 'auto',
    bottom: 0,
    left:0,
    right: 0,
    // [theme.breakpoints.up('xl')]: {
    //   padding: "0 30%"

    // }
    

  }
  
  
}));

function Index(props) {
  const classes = useStyles();
  const theme=useTheme();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.container} >
      <Suspense fallback={<div></div>}>

      {props.user && <AppBar theme={theme}{...props}/>}
      {!props.user && <GuestAppBar   {...props}/>}
      <main className={classes.content}>

        <Outlet />
      </main>
      <footer className={classes.footer}>
        <Footer/>
      </footer>
      </Suspense>


    </div>

    </ThemeProvider>
  );
}

Index.propTypes = {};
const mapStateToProps = (state) => ({
  user: state.userState.user
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)




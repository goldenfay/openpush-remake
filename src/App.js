import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import './App.css';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Router from './router';
  //themes
import darkTheme from './themes/dark';  
import LightTheme from './themes/light';  

function App(props) {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
//   const [theme,setTheme] =useState(createMuiTheme(
//         props.mode==='dark'? darkTheme: LightTheme
   
//   ));
//   useEffect(()=>{
//     console.log(props.mode)
//     setTheme(createMuiTheme(
//       props.mode==='dark'? darkTheme: LightTheme
 
// ))

//   },[props.mode])
  const theme = React.useMemo(
    () =>
      createMuiTheme(
        props.mode==='dark'? darkTheme: LightTheme
      ),
    [props.mode]
  );
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router/>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  mode: state.layoutState.current_theme,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);

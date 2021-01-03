import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import store from './redux/store'
import Router from './router';
  //Pages

function App() {

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#23222c",
            light: "#33323B",
            ultraLight: "#807F85"
            
          },
          secondary: {
            main: "#ED1C24",

          },
          success: {
            main: "#44B91B",
          },
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 1280,
            xl: 1920,
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline/>
        <Router/>

      </Provider>
    </ThemeProvider>
  );
}

export default App;

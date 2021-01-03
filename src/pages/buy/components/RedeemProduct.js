import React from "react";
import PropTypes from "prop-types";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
// Components
import successFailTheme from "../../../themes/success-fail";



const useStyles = makeStyles((theme) => ({
   
    section: {
        marginTop: theme.spacing(4),
      },
      actionButton: {
          minHeight: 50,
        //   minWidth: 70
      }
  }));

function RedeemProduct(props) {
  const theme = createMuiTheme(successFailTheme);
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12} container justify="center" className={classes.section}>
          <Typography align="center" variant="caption">
            After activation, the code will be shown to you for 5 minutes.
            After, you won't be able to activate it anymore. Do you want to
            continue?
          </Typography>
        </Grid>
        <Grid item xs={12} container justify="center" spacing={2} className={classes.section}>
          <Grid item xs={5}>
            <Button fullWidth className={classes.actionButton} color="primary" variant="contained">
              Yes
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button fullWidth className={classes.actionButton} color="secondary" variant="contained">
              No
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

RedeemProduct.propTypes = {
  confirmHandler: PropTypes.func.isRequired,
  cancelHandler: PropTypes.func.isRequired,
};

export default RedeemProduct;

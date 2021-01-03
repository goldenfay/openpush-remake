import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  TextField,
  FormControl,
  Typography,
  Link,
  Checkbox,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-parent",
    overflow: "hidden",
  },
  formControl: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  section: {
    marginTop: theme.spacing(4),
  },
  devider: {
    // display: "flex",
    // alignItems: "center",
    // textAlign: "center",
    "&::before": {
      content: '""',
      height: 10,
      color:'red',
      display:"block",
      backgroundColor: 'red',
      marginRight:"20px",
      borderBottom: "1px solid #000",
    },
    "&::after": {
      content: '""',
      height: 10,
      color:'red',
      display:"block",
      backgroundColor: 'red',
      marginLeft:"20px",
      borderBottom: "1px solid #000",
    },
  },
}));

function Register(props) {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.form}>
        <legend>
          <Typography variant="h5" color="inherit">
            {" "}
            Create an account
          </Typography>
          Already have an account?{" "}
          <Link color="secondary" href="#" underline="hover">
            Sign in
          </Link>
        </legend>
        <Grid container direction="column" spacing={3}>
          <Grid item xs>
            <FormControl className={classes.formControl}>
              <TextField
                fullWidth
                id="username-input"
                label="Email or Phone"
                variant="filled"
              />
            </FormControl>
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              id="password-input"
              label="Password"
              type="password"
              variant="filled"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs>
            <Checkbox
              defaultChecked
              color="secondary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <label> I have read and agree to Terms and Conditions, Privacy policy</label>
          </Grid>
          <Grid item xs>
            <Button fullWidth color="secondary" variant="contained">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid
        container
        direction="row"
        justify="center"
        // className={classes.devider}
      >
        <Typography variant="caption" color="textSecondary">Or</Typography>
      </Grid>
      

      <Grid
        container
        direction="row"
        justify="center"
        spacing={5}
        className={classes.section}
      >
        <Grid item>
          <Link href="#">
            <img src="/assets/imgs/facebook_logo.png" alt="" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="#">
            <img src="/assets/imgs/google_logo.png" alt="" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="#">
            <img src="/assets/imgs/twitter_logo.png" alt="" />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

Register.propTypes = {};

export default Register;

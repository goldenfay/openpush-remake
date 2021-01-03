import React,{ useState } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {login} from '../../redux/actions/user-actions'
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


// Fake user
import user from '../../data/user'


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

function Login(props) {
  const classes = useStyles();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleLogin=(e)=>{
    console.log(email,password);
    if(email==="exemple@exemple.com" && password==="biapi"){
      props.login(user)

      window.location.reload()
    }


  }
  return (
    <div>
      <form className={classes.form}>
        <legend>
          <Typography variant="h5" color="inherit">
            {" "}
            Sign in
          </Typography>
          New user?{" "}
          <Link color="secondary" href="#" underline="hover">
            Create an account
          </Link>
        </legend>
        <Grid container direction="column" spacing={3}>
          <Grid item xs>
            <FormControl className={classes.formControl}>
              <TextField
                fullWidth
                id="username-input"
                name="email"
                placeholder="Email or Phone"
                variant="filled"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              id="password-input"
              placeholder="Password"
              type="password"
              name="password"
              variant="filled"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs>
            <Checkbox
              defaultChecked
              color="secondary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <label> Remeber me</label>
          </Grid>
          <Grid item xs>
            <Button fullWidth color="secondary" variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </Grid>
          <Grid item xs container direction="row" justify="center">
            <Typography variant="caption" color="inherit">
              {" "}
              <Link href="#" color="inherit">
                Forgot password?
              </Link>
            </Typography>
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

Login.propTypes = {};
const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps =(dispatch)=> ({
  login: (user)=>dispatch(login(user))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

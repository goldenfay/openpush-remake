import React from "react";
import {useNavigate} from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/user-actions";
import {
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
   
  },
  
}));

function Logout(props) {
  const classes = useStyles();
  const navigator=useNavigate();

  const handleLogout = (e) => {

    props.logout();
    window.location.reload()
    // navigator('/');
    // props.handleClose && props.handleClose()

  };
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={3}
        className={classes.root}
      >
        <Grid item xs={12} container justify="center">
          <Typography variant="caption" color="inherit">
            {props.user.email} . are you sure want to log out?
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justify="center"
          direction="column"
          spacing={3}
        >
          <Grid item container xs={12} justify="center">
            <Button fullWidth size="large" variant="contained" color="secondary" onClick={handleLogout}>
              <Typography component="span"> Log out </Typography>
            </Button>
          </Grid>
          <Grid item container xs={12} justify="center">
            <Button fullWidth size="large" variant="filled" onClick={props.handleClose} >
              <Typography component="span" color="textSecondary">
                {" "}
                Cancel{" "}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Logout.propTypes = {};
const mapStateToProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

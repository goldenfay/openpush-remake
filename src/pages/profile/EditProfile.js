import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Components
import Avatar from "../../components/Avatar";

const useStyles = makeStyles((theme) => ({
  form: {
    paddingLeft: theme.spacing(5),
    width: "100%",
  },
  formControl: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  formControlLabel: {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary,
    minHeight: theme.spacing(3)
  },
  formgroup: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  },
  lgUp: {

    [theme.breakpoints.down("md")]: {
      display: "none",
      
    },
  },
  actionSection: {
    marginTop: theme.spacing(5)
  }
}));

function EditProfile(props) {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={5}>
      {/* Profile Avatar section */}
      <Grid item xs={12} container>
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width={1}
            p={3}
          >
            <Typography variant="h5">Edit Profile</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={4} container justify="center">
            <Avatar style={{ width: "80px", height: "80px" }} />
          </Grid>
          <Grid item xs={8} container direction="column" justify="center">
            <Grid item>
              <Button>
                <Typography variant="body2"> Change profile picture</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="caption" color="textSecondary">
                PNG, JPG, up to 5MB
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Edit form */}
      <Grid item xs={12} container>
        <form className={classes.form}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              xs={12}
              container
              spacing={2}
              className={classes.formgroup}
            >
              <Grid item xs={12} md={6}>
                <FormControl className={classes.formControl}>
                  <label className={classes.formControlLabel}>
                    Change password
                  </label>
                  <TextField
                    fullWidth
                    id="current-password-input"
                    placeholder="Current password"
                    variant="filled"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl className={classes.formControl}>
                  <label className={classes.formControlLabel}></label>
                  <TextField
                    fullWidth
                    id="new-password-input"
                    placeholder="New password"
                    variant="filled"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} container spacing={2}  className={classes.formgroup}>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <label className={classes.formControlLabel}>
                    Change Email
                  </label>
                  <TextField
                   
                    fullWidth
                    id="email-input"
                    placeholder="Change Email"
                    variant="filled"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} container spacing={2} className={classes.formgroup}>
              <Grid item xs={12} lg={4}>
                <FormControl variant="filled" className={classes.formControl}>
                  <label className={classes.formControlLabel}>
                    Default language
                  </label>
                  <Select
                    labelId="language-select"
                    id="demo-simple-select-filled"
                    value={"english"}
                    fullWidth
                  >
                    
                    <MenuItem value={"english"}>English</MenuItem>
                    <MenuItem value={"french"}>French</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            
            <Grid item xs={12} container className={classes.actionSection} spacing={4} justify="center">
              <Grid item xs={12} md={6} container justify="center">
                <Button size="large" fullWidth color="secondary" variant="contained">
                  Save changes
                </Button>

              </Grid>
              <Grid item xs={12} md={6} container justify="center" className={classes.lgUp}>
                
                <Button size="large" fullWidth color="primary" variant="outlined" >
                  Delete account
                </Button>

              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

EditProfile.propTypes = {};

export default EditProfile;

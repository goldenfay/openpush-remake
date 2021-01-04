import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  paddedTitle: {
    paddingLeft: theme.spacing(2),
  },
  form: {
    paddingLeft: theme.spacing(5),
    width: "100%",
  },
  formControl: {
    marginTop: theme.spacing(2),
    width: "100%",
    maxHeight: 50,
    "& *": {
      height: "100%",
    },
  },
  formControlLabel: {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary,
    width: "100%",
  },
  formgroup: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  },
  formgroupUp: {
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  },
 
  changeInfosContainer: {
    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-start",
    
    },
  },
}));

function UpgradeLevel(props) {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={3} className={classes.root}>
      {/*  */}
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width={1}
          >
            <Typography variant="h5">Upgrade Level</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container direction="column" spacing={1}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="stretch"
            alignItems="center"
            width={1}
          >
            <img
              src="/assets/imgs/badges/silver_medal.png"
              alt=""
              height={30}
            />
            <Typography variant="h5" className={classes.paddedTitle}>
              Silver Level
            </Typography>
          </Box>
          <Grid item xs={12} container>
            <Typography variant="caption" color="textSecondary">
              Collect up to 200 000 Rabbits, 5 vouchers at the same time,
              unlimited discounts and 5 000 Rabbits bonus! Now, You can spin the
              wheel every 3.5 hours{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* SMS Code form */}
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} md={5}>
            <FormControl
              component={Box}
              height={1}
              className={classes.formControl}
            >
              <TextField
                fullWidth
                id="sms-code-input"
                value="+359 89 123 4567"
                variant="filled"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl
              component={Box}
              height={1}
              className={classes.formControl}
            >
              <Button
                size="large"
                fullWidth
                variant="contained"
                color="secondary"
              >
                Resend Code
              </Button>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Typography variant="caption" color="textSecondary">
            Enter you number in the following format: +359 89 123 4567 (note,
            there is no "0" in front of your number). If you don't get the
            verification code the first time, please contact the support team
          </Typography>
        </Grid>
      </Grid>
      {/* Gold Level section */}
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={12} container direction="column" spacing={1}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="stretch"
            alignItems="center"
            width={1}
          >
            <img src="/assets/imgs/badges/gold_medal.png" alt="" height={30} />
            <Typography variant="h5" className={classes.paddedTitle}>
              Gold Level
            </Typography>
          </Box>
          <Grid item xs={12} container>
            <Typography variant="caption" color="textSecondary">
              Collect up to 250 000 Rabbits, unlimited vouchers, unlimited
              discounts and 10 000 Rabbits bonus! Now, You can spin the wheel
              every 3 hours!
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Passport Id form */}
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={12} container spacing={2} alignItems="flex-end">
          <Grid item xs={12} md={4}>
            <label className={classes.formControlLabel}>Full Name</label>
            <FormControl
              component={Box}
              height={1}
              className={classes.formControl}
            >
              <TextField
                fullWidth
                id="fullname-input"
                value="Steve M"
                variant="filled"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <label className={classes.formControlLabel}>
              Passport or ID Number (*check terms and conditions to know why)
            </label>
            <FormControl
              component={Box}
              height={1}
              className={classes.formControl}
            >
              <TextField
                fullWidth
                id="passport-input"
                value="Steve M"
                variant="filled"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl
              component={Box}
              height={1}
              className={classes.formControl}
            >
              <Button
                size="large"
                fullWidth
                variant="contained"
                color="secondary"
              >
                Change
              </Button>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Typography variant="caption" color="textSecondary">
            Enter you number in the following format: +359 89 123 4567 (note,
            there is no "0" in front of your number). If you don't get the
            verification code the first time, please contact the support team
          </Typography>
        </Grid>
      </Grid>


      {/* Additional infos section */}
      <Grid item xs={12} container>
          {/* Edit Infos form */}
          <Grid item xs={12} container className={classes.formgroupUp} spacing={3}>
            <Grid item xs={12} container direction="column" spacing={1}>
              <Typography variant="h5"> Additional Information </Typography>
              <Typography variant="caption" color="textSecondary">
                Get more rabbits by filling in the following information
              </Typography>
            </Grid>
            <Grid item xs={12} container direction="column" spacing={1}>
              <Grid item xs={12} container spacing={2} alignItems="flex-end">
                <Grid item xs={4}>
                  <label className={classes.formControlLabel}>Date of birth</label>
                  <FormControl
                    component={Box}
                    height={1}
                    className={classes.formControl}
                  >
                    <Select labelId="language-select" id="year-input" value="year">
                      <MenuItem disabled value="year">
                        Year
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl
                    component={Box}
                    height={1}
                    className={classes.formControl}
                  >
                    <Select
                      labelId="language-select"
                      id="month-input"
                      value="month"
                    >
                      <MenuItem disabled value="month">
                        Month
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl
                    component={Box}
                    height={1}
                    className={classes.formControl}
                  >
                    <Select labelId="language-select" id="day-input" value="day">
                      <MenuItem disabled value="day">
                        Day
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} container>
              <FormHelperText>Fill it and get 2000 Rabbits</FormHelperText>
            </Grid>
            <Grid item xs={12} container direction="column" spacing={1}>
              <Grid item xs={12} container spacing={2} alignItems="flex-end">
                <Grid item xs={12}>
                  <label className={classes.formControlLabel}>Gender</label>
                  <FormControl
                    component={Box}
                    height={1}
                    className={classes.formControl}
                  >
                    <Select
                      labelId="language-select"
                      id="gender-input"
                      value="male"
                      fullWidth
                    >
                      <MenuItem disabled value="male">
                        Male
                      </MenuItem>
                      <MenuItem value={"female"}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} container>
              <FormHelperText>Fill it and get 2000 Rabbits</FormHelperText>
            </Grid>
            <Grid item xs={12} container justify="center" className={classes.changeInfosContainer}>
              <Grid item xs={12} md={4} container justify="center">
                <Button size="large" fullWidth variant="contained" color="secondary">
                  Change
                </Button>
              </Grid>
            </Grid>
          </Grid>

      </Grid>

    </Grid>
  );
}

UpgradeLevel.propTypes = {};

export default UpgradeLevel;

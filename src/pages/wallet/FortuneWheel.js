import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Link,
  Typography,
  FormControl,
  TextField,
  IconButton,
  FilledInput,
  InputAdornment,
} from "@material-ui/core";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// Components
import FluidImage from "../../components/FluidImage";

const useStyles = makeStyles((theme) => ({
  centered: {
    display: "flex",
    justifyContent: "center",
  },
  shareLink: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // height: "100%",
    // width: "100%",
    // alignItems:'center',
    // margin: 'auto',
    "& *": {
      display: "flex",
      justifyContent: "center",
    },
  },
  scoreContainer: {
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "#494949",
    },
  },
}));

function FortuneWheel(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} direction="column">
      <Grid item xs>
        <Typography component="span" variant="h5">
          Fortune Wheel
        </Typography>
      </Grid>
      <Grid item xs container spacing={3} direction="row" justify="center" alignItems="center">
        {/* Wheel */}
        <Grid item xs={12} lg={6} container direction="row" justify="center">
          <FluidImage image="/assets/dummy/wallet/wheel.png" />
          {/* <img src="/assets/dummy/wallet/wheel.png" alt="" /> */}
        </Grid>
        {/* Infos */}
        <Grid
          item
          xs={12}
          lg={6}
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            className={classes.scoreContainer}
          >
            <Grid item container direction="row" justify="center">
              <Typography
                variant="caption"
                color="textSecondary"
                align="center"
              >
                You win
              </Typography>
            </Grid>
            <Grid item xs={3} container direction="row" justify="flex-end">
              <Typography component="span" variant="subtitle2">
                25 000
              </Typography>
            </Grid>
            <Grid item xs={2} container direction="row" justify="flex-start">
              <img src="/assets/dummy/main/rabbit.png" alt="" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs container justify="center" direction="row">
              <Typography component="span" variant="caption" align="center">
                For each friend you invite, you can get one additional spin.
                Your friend has to click on the link, register and spin the
                wheel. Your invite link:
              </Typography>
            </Grid>
            <Grid item xs={12} container justify="center">
              <FormControl fullWidth>
                <FilledInput
                  fullWidth
                  type="text"
                  disabled
                  value="https://openpush.io/#/invite/https://openpush.io/#/invite/"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={() => console.log("copied")}>
                        <FileCopyOutlinedIcon color="action" />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
          {/* Share */}
          <Grid
            item
            xs
            container
            spacing={3}
            direction="column"
            justify="center"
          >
            <Grid item container direction="row" justify="center">
              <Typography variant="caption" align="center">
                Share your winnings on facebook and get one free wheel spin (you
                can only get the reward once a day)
              </Typography>
            </Grid>
            <Grid
              item
              xs
              container
              direction="row"
              justify="center"
              spacing={4}
            >
              {/* <Grid item container> */}
                <Grid item>
                  <Link href="#" className={classes.shareLink}>
                    {/* <FluidImage image="/assets/imgs/messanger_logo_share.png" alt="" /> */}
                    <img
                      height={40}
                      src="/assets/imgs/messanger_logo_share.png"
                      alt=""
                    />
                    {/* <Typography variant="caption" color="textSecondary">Messanger</Typography> */}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" className={classes.shareLink}>
                    {/* <FluidImage image="/assets/imgs/facebook_logo_share.png" alt="" /> */}
                    <img
                      height={40}
                      src="/assets/imgs/facebook_logo_share.png"
                      alt=""
                    />
                    {/* <Typography variant="caption" color="textSecondary">Facebook</Typography> */}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" className={classes.shareLink}>
                    {/* <FluidImage image="/assets/imgs/gmail_logo_share.png" alt="" /> */}
                    <img
                      height={40}
                      src="/assets/imgs/gmail_logo_share.png"
                      alt=""
                    />
                    {/* <Typography variant="caption" color="textSecondary">Gmail</Typography> */}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" className={classes.shareLink}>
                    <IconButton onClick={() => console.log("copied")}>
                      <MoreHorizIcon color="action" />
                    </IconButton>

                    <Typography variant="caption" color="textSecondary">
                      Plus
                    </Typography>
                  </Link>
                </Grid>
              {/* </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

FortuneWheel.propTypes = {};

export default FortuneWheel;

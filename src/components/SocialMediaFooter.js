import React from "react";
import PropTypes from "prop-types";
import { Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 
  
}));

function SocialMediaFooter(props) {
  const classes=useStyles()
  return (
    <Grid container justify="center" direction="column" spacing={4} className={classes.container}>
      <Grid item xs container direction="row" justify="center">
        <Typography variant="h4" > Stay connected</Typography>
      </Grid>
      <Grid
        item
        xs
        container
        direction="row"
        justify="center"
        spacing={5}
        // className={classes.section}
      >
        <Grid item>
          <Link href="#">
            <img src="/assets/imgs/facebook_logo.png" alt="" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="#">
            <img src="/assets/imgs/youtube_logo.png" alt="" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="#">
            <img src="/assets/imgs/twitter_logo.png" alt="" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="#">
            <img src="/assets/imgs/instagram_logo.png" alt="" />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

SocialMediaFooter.propTypes = {};

export default SocialMediaFooter;

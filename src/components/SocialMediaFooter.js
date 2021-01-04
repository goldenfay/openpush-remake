import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 
  
}));

function SocialMediaFooter(props) {
  const classes=useStyles()
  return (
    <Grid item container justify="center"  spacing={4} className={classes.container}>
      <Grid item xs={12} container direction="row" justify="center">
        <Typography variant="h4" align="center"> Stay connected</Typography>
      </Grid>
      <Grid
        item
        xs={12}
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

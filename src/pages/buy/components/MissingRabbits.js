import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FluidImage from "../../../components/FluidImage";

const choices = [
  {
    label: "Fortune wheel",
    to: "#",
  },
  {
    label: "Accept notification",
    to: "#",
  },
  {
    label: "Fill ranking data",
    to: "#",
  },
  {
    label: "Fill social connection",
    to: "#",
  },
];

const useStyles = makeStyles((theme) => ({
  headIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: theme.spacing(5),
    maxHeight: 80,
    "& img": {
      maxHeight: 75,
    },
  },
  choiceButton: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

function MissingRabbits(props) {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      {/* Head */}
      <Grid item xs={12} container direction="row" justify="center">
        <Grid item xs={3} className={classes.headIcon}>
          <img src="/assets/dummy/main/rabbit.png" alt="" />
        </Grid>
      </Grid>
      {/* Content */}
      <Grid item xs={12} container direction="row" justify="center">
        <Grid item xs={12} container justify="center">
          <Typography align="center" variant="caption">
            You dont have enough rabbit to redeem this product. You can collect
            coins
          </Typography>
        </Grid>
        <Grid item xs={12} container direction="column" spacing={2}>
          {choices.map((choice, index) => (
            <Grid item xs={12}>
              <Button
                key={index}
                fullWidth
                variant="outlined"
                // color="primary"
                className={classes.choiceButton}
                // component={Link}
                // href={choice.to}
              >
                <Typography
                  align="center"
                  variant="caption"
                  color="textPrimary"
                >
                  {choice.label}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

MissingRabbits.propTypes = {};

export default MissingRabbits;

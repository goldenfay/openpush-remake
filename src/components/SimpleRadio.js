import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    border: "1px solid rgba(200,200,200,0.5)",

    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",

  
    "input:hover ~ &": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  checkedIcon: {
    backgroundColor: theme.palette.primary.main,
    // backgroundImage:
    //   "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "input:hover ~ &": {
      backgroundColor: theme.palette.primary.contrastText,
    },
  },
}));

// Inspired by blueprintjs
export default function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={
        <span
          className={props.classes || clsx(classes.icon, classes.checkedIcon)}
        />
      }
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const grades = [
  {
    class: "medal_gold",
    color: "#FFE26F",
    badge: "/assets/imgs/medals/medal_gold.png",
  },
  {
    class: "bronze_medal",
    color: "#DE4F42",
    badge: "/assets/imgs/medals/bronze_medal.png",
  },
  {
    class: "diamond",
    color: "#70BBEF",
    badge: "/assets/imgs/medals/diamond.png",
  },
  {
    class: "gol_medal_pro",
    color: "#FF9838",
    badge: "/assets/imgs/medals/gol_medal_pro.png",
  },
  {
    class: "star",
    color: "#F98824",
    badge: "/assets/imgs/medals/star.png",
  },
  {
    class: "grad",
    color: "#0083FD",
    badge: "/assets/imgs/medals/grad.png",
  },
  {
    class: "silver_medal",
    color: "#A5BABF",
    badge: "/assets/imgs/medals/silver_medal.png",
  },
  {
    class: "silver_star",
    color: "#EEF2F5",
    badge: "/assets/imgs/medals/silver_star.png",
  },
  {
    class: "trophy",
    color: "#FFC250",
    badge: "/assets/imgs/medals/trophy.png",
  },
];
const styles = Object.assign(
  {},
  ...grades.map((grade) => ({
    [grade.class]: {
      padding: 5,
      border: `5px solid ${grade.color}`,
    },
  }))
);
const stylesFcn = (theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  ...styles,
});

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const useStyles = makeStyles(stylesFcn);

export default function BadgeAvatars(props) {
  const classes = useStyles();
  const { alt, badge, grade, src, ...others } = props;

  return (
    <div className={classes.root}>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <SmallAvatar
            alt={props.alt}
            src={props.badge || "/assets/imgs/badges/bronze_medal.png"}
          />
        }
      >
        <Avatar
          className={`${classes.large} ${
            classes[props.grade] || classes.bronze_medal
          }`}
          alt={props.alt}
          src={props.src || "/assets/imgs/default_avatar.png"}
          {...others}
        />
      </Badge>
    </div>
  );
}

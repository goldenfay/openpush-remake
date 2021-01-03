import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function CustomCard(props) {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#44B91B",
      },
      type: "dark"
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardHeader
          action={
            props.withMoreAction && (
              <IconButton
                aria-label="settings"
                color={props.moreActionColor || "secondary"}
              >
                <MoreHorizIcon />
              </IconButton>
            )
          }
          title={props.title}
          subheader={props.subTitle}
        />
        {props.mediia && (
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.mediaTitle}
          />
        )}
        {props.content && <CardContent>{props.content}</CardContent>}
        {props.body}
        
        {props.actions && (
          <CardActions disableSpacing>{props.actions}</CardActions>
        )}
      </Card>
    </ThemeProvider>
  );
}

CustomCard.propTypes = {
  title: PropTypes.any.isRequired,
  subheader: PropTypes.any,
  withMoreAction: PropTypes.bool,
  madia: PropTypes.any,
  image: PropTypes.string,
  mediaTitle: PropTypes.string,
  content: PropTypes.any,
  actions: PropTypes.any,
};

export default CustomCard;

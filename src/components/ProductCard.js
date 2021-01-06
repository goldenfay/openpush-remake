import React from "react";
import PropTypes from "prop-types";
import {Link as BrowserLink} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
  Link
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  disabled: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.light,
    opacity: 0.5
  },
  leftSide: {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'flex-between',
    justifyContent: 'space-between'

    
  }
}));

function ProductCard(props) {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#44B91B",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        {props.disabled && <div className={classes.disabled}></div>}
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
        />

        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.mediaTitle}
        />

        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={8} p={2} className={classes.leftSide}>
              <Typography component="span" variant="body1">{props.title}</Typography>
              <Typography component="span" variant="caption" color="textSecondary">{props.subheader}</Typography>
            </Grid>
            <Grid item xs={4} container justify="center" spacing={3}>
              <Grid item container justify="center" alignItems="center" spacing={2} >
                <Grid item xs={9} container justify="center">
                  <Typography component="span" variant="subtitle2">{props.price.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={2}  container justify="center">
                  <img src="/assets/dummy/main/rabbit.png" alt=""/>  
                </Grid>
              </Grid>
              <Grid item container justify="center">
                <Button color="primary" variant="contained" component={BrowserLink} to={props.link}>
                  <Link >
                  <ShoppingCartIcon color="action"/> 
                  </Link>
                  </Button>

              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        {props.actions && (
          <CardActions disableSpacing>{props.actions}</CardActions>
        )}
      </Card>
    </ThemeProvider>
  );
}

ProductCard.propTypes = {
  title: PropTypes.any.isRequired,
  subheader: PropTypes.any,
  price: PropTypes.number,
  withMoreAction: PropTypes.bool,
  image: PropTypes.string.isRequired,
  mediaTitle: PropTypes.string,

};

export default ProductCard;

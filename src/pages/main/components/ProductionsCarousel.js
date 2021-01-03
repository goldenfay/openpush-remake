import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, CardMedia } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
//Components

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  carousel: {
    width: "100%",
  },
  indicator: {
    "&.active": {
      color: theme.palette.secondary.main,
    },
  },
  // box: {
  //   [theme.breakpoints.down("sm")]: {
  //     minwidth: theme.breakpoints.values.sm,
  //     maxWidth: theme.breakpoints.values.sm,
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     width: theme.breakpoints.values.md,
  //     maxWidth: theme.breakpoints.values.md,
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     width: theme.breakpoints.values.lg,
  //     maxWidth: theme.breakpoints.values.lg,
  //   },
  // },
}));

function ProductionsCarousel(props) {
    const classes = useStyles();
    const carouselItems=props.items;
    return (
        <Grid item sm={12} component={Box}  width={1}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            className={classes.box}
            // p={3}
          >
            <Carousel
              className={classes.carousel}
              indicatorProps={{ className: classes.indicator }}
            >
              {carouselItems && carouselItems.map((item, i) => (
                <CardMedia
                  key={i}
                  src={item}
                  component="img"
                />
              ))}
            </Carousel>
          </Box>
        </Grid>
    )
}

ProductionsCarousel.propTypes = {
    items: PropTypes.array.isRequired
}

export default ProductionsCarousel


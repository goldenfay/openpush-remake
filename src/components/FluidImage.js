import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";
import {
  CardMedia,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
      width:"100%",
    },
    media: {
      width: "100%",
    //   height: 0,
    //   paddingTop: "56.25%", // 16:9
    },
  }));
function FluidImage(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={props.image} className={classes.media} alt=""/>

        </div>
        // <CardMedia image={props.image} className={classes.media}/>
    )
}

FluidImage.propTypes = {
    image: PropTypes.string.isRequired

}

export default FluidImage


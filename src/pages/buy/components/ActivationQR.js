import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  FormControl,
  IconButton,
  FilledInput,
  InputAdornment,
} from "@material-ui/core";
import {
    makeStyles,
  } from "@material-ui/core/styles";
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

// Components
import FluidImage from '../../../components/FluidImage';
import { useState } from "react";
import { useEffect } from "react";



const useStyles = makeStyles((theme) => ({
   
    smoothRedBg: {
     
        position: "relative",
        zIndex: 4,
        background: "none",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3,
          zIndex: 1,
          backgroundColor: theme.palette.secondary.dark,
        },
     
    },
  }));


function ActivationQR(props) {
    const classes = useStyles();
    const deadLine=new Date(props.activationDate);
    const [remainingTime,setRemainingTime]=useState(new Date());


    useEffect(()=>{
        let x=setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();
              
            
            var distance = deadLine - now;
              
           
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
              
            let remains;
            
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                remains="EXPIRED!"
                
            }
            else remains=hours + ":"+ minutes + ":" + seconds;

            setRemainingTime(remains);
          }, 1000);

    },[])
  return (
    <Grid container spacing={3} direction="row" justify="center">
      <Grid item xs={12} lg={7} container direction="row" justify="center" spacing={3}>
          {/* QR Code */}
        <Grid item xs={12} md={5} container>
            <Grid item xs={12}>
                <FluidImage image="/assets/dummy/buy/qr_code.png" />
            </Grid>

        </Grid>
        {/* Copy and Share */}
        <Grid item xs={12} md={7} container direction="row" justify="center" spacing={2}>
          <Grid item xs={12}>
            <Typography >
              Tip: For each friend you invite, you can get one additional spin.
              Your friend has to click on ther and spin the wheel. Your link:
            </Typography>
          </Grid>
          <Grid item xs={12}>
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
      </Grid>
      {/* Activation CountDown */}
      <Grid item xs={12} lg={5} container direction="column" justify="center" alignItems="center" spacing={2}  >
          <Grid item  container className={classes.smoothRedBg}>
          <Grid item xs={12} container direction="row" justify="center">
              <Typography variant="h4" color="secondary">{remainingTime.toString()}</Typography>

          </Grid>
          <Grid item xs={12} container direction="row" justify="center">
              <Typography variant="caption" color="textSecondary">{props.activationDate.toString()}</Typography>

          </Grid>

          </Grid>

      </Grid>
    </Grid>
  );
}

ActivationQR.propTypes = {
  activationDate: PropTypes.string.isRequired,
};

export default ActivationQR;

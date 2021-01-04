import React from 'react'
import {Link as BrowserLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import {Grid,Link,Typography  } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    footer: {
        // backgroundColor: theme.palette.primary.main,
        // height: "100%"

    },
    link: {
      textTransform: "capitalize",
      color: "white",
      display: "flex",
      margin: theme.spacing(1),
      '&.active':{
          color: theme.palette.secondary.main

      }
    },
    margined: {
        marginTop: theme.spacing(3)

    }
   
  }));


const footerLinks=[
    {label: "Terms and Conditions", link: '#'},
 {label: "• Privacy policy", link: '#'},
 {label: "• What is openpush", link: '#'},
 {label: "• Get golden rabbits", link: '#'} ,
{label: "• FAQ", link: '/FAQ'},
{label: "• Deal", link: '#'},
 {label: "• Social", link: '#'},
 {label: "contact", link: '#'}]
function Footer(props) {

    const classes=useStyles();
    return (
        <footer className={classes.footer}>
            <Grid container justify="center" >
                 
                    {footerLinks.map((link,idx)=>(
                        <Link key={idx} 
                        component={BrowserLink}
                        to={link.link}
                        // href={link.link} 
                        underline="hover" 
                        className={`${classes.link} ${idx===2?"active":""}`} >
                        {link.label}
                      </Link>
                    ))}

            </Grid>
            <Grid container justify="center" className={classes.margined}>
                <Typography component="span" variant="caption" color="textSecondary">
                OPENPUSH IS OWNED AND OPERATED BY MV CONCEPT EOOD

                </Typography>

            </Grid>

            
        </footer>
    )
}

Footer.propTypes = {

}

export default Footer


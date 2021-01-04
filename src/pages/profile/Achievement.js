import React,{ useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AchievementsItems, {useAchievementStyles} from '../../static/achievements'

// Fake user achievements
const userAchievements=['5_days_connection','first_viber_notification','5_products_activations']



const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: 0,
     
    },
  },
  section: {
    marginTop: theme.spacing(5)
    
  },
  walletContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor:  theme.palette.background.paper
    
  },
  list: {
    width: "100%",
    marginTop: theme.spacing(2)
   
  },
  listItem: {
    // backgroundColor: theme.palette.grey[700],
    
    position:  "relative",
    textTransform: "capitalize",
    borderRadius: '10px 10px 10px 10px',
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
    
  },
  itemIcon: {
    marginRight: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: "80px",
    maxHeight: "100%",
    '& img': {
      
    }
  },
}));



function Achievement(props) {
  const classes = useStyles();
  const achievementsStyles=useAchievementStyles();
  const unlockedAchievements=[],lockedAcievements=[];
  AchievementsItems.forEach(achv=>{
    if(userAchievements.indexOf(achv.id)>-1) unlockedAchievements.push(achv)
    else lockedAcievements.push(achv)
  })
  

 
  return (
    <Grid container direction="column" className={classes.root}>
      {/* Head section */}
      <Grid item xs={12} container>
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width={1}
          >
            <Typography variant="h5" >Achievements</Typography>
            <Box className={classes.walletContainer} >  
              <img src="/assets/imgs/wallet.svg" alt="Credit" />
              12 000
             </Box>
            
          </Box>
        </Grid>
        
      </Grid>
      {/* Unlocked Achievements section */}
      <Grid item xs={12} container>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.list}
        >
          {unlockedAchievements && unlockedAchievements.map((item, idx) => (
            <ListItem button key={idx} className={`${classes.listItem} ${achievementsStyles[item.className]}`}>
              <ListItemIcon className={classes.itemIcon} ><img src={item.icon}  alt="Task" /></ListItemIcon>
              <ListItemText primary={item.body} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} container justify="center" className={classes.section}>
        <Typography color="textSecondary" align="center"> Complete the 10 differents achivement and unlock next</Typography>
      </Grid>
      {/* Locked Achievements section */}
      <Grid item xs={12} container>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.list}
        >
          {lockedAcievements && lockedAcievements.map((item, idx) => (
            <ListItem button key={idx} disabled className={`${classes.listItem} ${achievementsStyles[item.className]}`}>
              <ListItemIcon className={classes.itemIcon} ><img src={item.icon}  alt="Task" /></ListItemIcon>
              <ListItemText primary={item.body} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

Achievement.propTypes = {};

export default Achievement;

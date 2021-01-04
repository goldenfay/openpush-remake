import React from "react";
import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch
} from "@material-ui/core";
import { makeStyles,withStyles } from "@material-ui/core/styles";
//Icons
import { ReactComponent as WhatsAppIcon } from '../../imgs/social/whatsapp_logo.svg';
import { ReactComponent as TwitterIcon } from '../../imgs/social/twitter_logo.svg';
import { ReactComponent as FacebookIcon } from '../../imgs/social/facebook_logo.svg';
import { ReactComponent as WechatIcon } from '../../imgs/social/wechat_logo.svg';
import { ReactComponent as AppleIcon } from '../../imgs/social/apple_logo.svg';
import { ReactComponent as ViberIcon } from '../../imgs/social/viber_logo.svg';
import { useState } from "react";

const Menu =[
  {
    id: 'whatsapp',
    icon: <WhatsAppIcon/>,
    linked: true
  },
  {
    id: 'twitter',
    icon:<TwitterIcon/> ,
    linked: false
  },
  {
    id: 'facebook',
    icon:<FacebookIcon/> ,
    linked: true
  },
  {
    id: 'wechat',
    icon:<WechatIcon/> ,
    linked: false
  },
  {
    id: 'apple',
    icon:<AppleIcon/> ,
    linked: false
  },
  {
    id: 'viber',
    icon: <ViberIcon/>,
    linked: false
  },

];
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: 0,
     
    },

  },
  list: {
    width: "100%",
    marginTop: theme.spacing(2)
   
  },
  listItem: {
    backgroundColor: theme.palette.grey[700],
    textTransform: "capitalize",
    borderRadius: '5px 5px 5px 5px',
    margin: '1px',
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
     
    },
    
  },
}));

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});



function SocialConnection(props) {
  const classes = useStyles();
  const [socialSwitches,setSocialSwitches]=useState(
    Object.assign({},...(Menu.map(el=>({[el.id]: el.linked}))))
  )

  const updateSocialState=(e)=>{
    setSocialSwitches({
      ...socialSwitches,
      [e.target.name]: e.target.checked
    })
    if(e.target.checked) alert(`Link with your ${e.target.name} account`)
  }
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
            <Typography variant="h5">Social connection</Typography>
            
          </Box>
        </Grid>
        
      </Grid>
      {/* Social media menu section */}
      <Grid item xs={12} container>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.list}
        >
          {Menu && Menu.map((item, idx) => (
            <ListItem button key={idx} className={classes.listItem}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.id} />
              <IOSSwitch  name={`${item.id}`}  onChange={updateSocialState} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

SocialConnection.propTypes = {};

export default SocialConnection;

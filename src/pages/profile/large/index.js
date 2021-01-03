import React from "react";
import PropTypes from "prop-types";
import {Outlet,Link } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import Menu from "../menu";


const useStyles = makeStyles((theme) => ({
    list: {
      width: "100%",
     
    },
    listItem: {
      backgroundColor: theme.palette.background.paper,
      marginBottom: theme.spacing(1),
      '&.active': {
        backgroundColor: theme.palette.secondary.main,

      }
      
    },
    placeholder: {
      padding: theme.spacing(4),
      backgroundColor: theme.palette.background.paper
    }
  }));

function Index({currentPage, ...props}) {
    const classes = useStyles();
  return (
    <Grid container direction="column">
      {/* Profile Avatar section */}
      <Grid item xs={12} container>
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width={1}
            p={4}
          >
            <Typography variant="h4">My profile</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={2}>
          {/* Main menu section */}
          <Grid item sm={4}>
            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.list}
            color="secondary"
            >
            {Menu && Menu.filter((el,idx)=>idx!==1).map((item, idx) => (
                <ListItem 
                button 
                key={idx} 
                className={`${classes.listItem} ${idx===props.currentPage || idx===0?"active":""}`}
                component={Link}
                to={item.link}
                
                >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
                </ListItem>
            ))}
            </List>

          </Grid>
          <Grid item sm={8} className={classes.placeholder}>
              <Outlet />
              

          </Grid>
      </Grid>
    </Grid>
  );
}

Index.propTypes = {};

export default Index;

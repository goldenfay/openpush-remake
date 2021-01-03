import React from "react";
import PropTypes from "prop-types";
import {Link } from "react-router-dom";
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
//Icons
import { ReactComponent as DarkMoonIcon } from "../../../imgs/icons/moon.svg";
import RightArrow from "@material-ui/icons/ArrowForwardIosOutlined";

// Components
import Avatar from "../../../components/Avatar";

import Menu from '../menu'

const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
   
  },
  listItem: {
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(1),
    "&:last-child": {
      marginTop: theme.spacing(3),
    },
  },
}));
function Main(props) {
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
          >
            <Typography variant="h4">My profile</Typography>
            <IconButton color="inherit">
              <DarkMoonIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12} md={4} container justify="center">
            <Avatar style={{width: "80px",height: "80px" }} />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            container
            justify="center"
            alignItems="center"
          >
            <Typography variant="body1">Simple@gmail.com</Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Main menu section */}
      <Grid item xs={12} container>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.list}
        >
          {Menu && Menu.map((item, idx) => (
            <ListItem button 
            key={idx} className={classes.listItem}
            component={Link}
                to={item.link}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
              <RightArrow />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

Main.propTypes = {};

export default Main;

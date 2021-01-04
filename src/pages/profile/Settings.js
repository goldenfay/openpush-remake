import React, { useState } from "react";
import { connect } from 'react-redux'

import {
  Grid,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import successFailTheme from "../../themes/success-fail";
//Compoennts
import SimpleRadio from "../../components/SimpleRadio";

const Menu = [
  {
    id: "Food & drinks",
    choosen: true,
  },
  {
    id: "Health and Beauty",
    choosen: true,
  },
  {
    id: "Sports and Hobbies",
    choosen: true,
  },
  {
    id: "Children",
    choosen: false,
  },
  {
    id: "For home, garden and pets",
    choosen: false,
  },
  {
    id: "Restaurants",
    choosen: true,
  },
  {
    id: "Entertainment",
    choosen: false,
  },
  {
    id: "Auto",
    choosen: false,
  },
  {
    id: "Transportation",
    choosen: false,
  },
];

const theme = createMuiTheme(successFailTheme);
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  section: {
    marginTop: theme.spacing(4),
  },
  list: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  listItem: {
    backgroundColor: theme.palette.grey[700],
    textTransform: "capitalize",
    borderRadius: "5px 5px 5px 5px",
    margin: "1px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
  },
  formControl: {
    marginTop: theme.spacing(2),
    width: "100%",
    minHeight: 30,
    maxHeight: 50,
    backgroundColor: theme.palette.background.paper,
    // "& *": {
    //   height: "100%",
    // },
  },
  formControlLabel: {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary,
    width: "100%",
  },
}));

function Settings(props) {
  const classes = useStyles();
  const [categoriesRadios, setCategoriesRadios] = useState(
    Object.assign({}, ...Menu.map((el) => ({ [el.id]: el.choosen })))
  );

  const updateCategoriesState = (e) => {
    setCategoriesRadios({
      ...categoriesRadios,
      [e.target.name]: !categoriesRadios[e.target.name],
    });
    console.log(categoriesRadios);
    // if(e.target.checked) alert(`Link with your ${e.target.name} account`)
  };
  return (
    <Grid container direction="row" className={classes.root} spacing={4}>
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
            <Typography variant="h5">Settings</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* Categories menu section */}
      <Grid item xs={12} container>
        <ThemeProvider theme={theme}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.list}
          >
            {Menu &&
              Menu.map((item, idx) => (
                <ListItem button key={idx} className={classes.listItem}>
                  <ListItemText primary={item.id} />
                  <SimpleRadio
                    name={item.id}
                    checked={categoriesRadios[item.id]}
                    onClick={updateCategoriesState}
                  />
                </ListItem>
              ))}
          </List>
        </ThemeProvider>
      </Grid>
      {/* Theme selection section */}
      <Grid item xs={12} container className={classes.section}>
        <Grid item xs={12}>
          <label className={classes.formControlLabel}>Choose theme</label>
          <FormControl className={classes.formControl}>
            <Select
              labelId="theme-select"
              id="theme-input"
              value="dark"
              variant="filled"
            >
              <MenuItem value="dark">Dark</MenuItem>
              <MenuItem value={"default"}>Default</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12} container className={classes.section} spacing={4}>
          <Grid item xs={12} md={6} container justify="center">
            <Button
              size="large"
              fullWidth
              color="secondary"
              variant="contained"
            >
              Save changes
            </Button>
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
  );
}

Settings.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.userState.user
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

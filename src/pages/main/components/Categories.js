import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Link,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { useState } from "react";

// Components
import CustomCard from "../../../components/CustomCard";
import ProductCard from "../../../components/ProductCard";
import TabPanel from "../../../components/TabPanel";

// Fake products data

import Products from '../../../data/products'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bglight: {
    backgroundColor: theme.palette.primary.light,
  },
}));


const tabprops = (index) => {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
};

const tabTitles = ["All", "Food & Drins", "Health & Beauty", "Sport"];
const instructions = [
  "Redeem your ticket for 0 Rabbits",
  "Go to your favourite supermarket and spent minimum 25 leva on Groceries",
  "Activate your golden ticket",
  "Take a picture of your bill within 2 hours of purchase (maximum once a day) to enter the Tombola",
];

function Categories(props) {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = useState(tabTitles[0]);
  const [showMapView, setShowMapView] = useState(false);

  const handleChange = (e, val) => {
    setCurrentTab(val);
  };
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography component="span" variant="h5">Categories</Typography>
          <Link href={"#"} underline="none" color="inherit" component="button" onClick={()=>setShowMapView(!showMapView)}>
            <Typography component="span" variant="caption">Show on map</Typography>
          </Link>
        </Box>
      </Grid>
      <Grid item xs container direction="row">
        <Grid item xs={10}>
          <TextField
            fullWidth
            id="filled-search"
            label="Search"
            type="search"
            variant="filled"
          />
        </Grid>
        <Grid item xs={2} container justify="center">
          <Button className={classes.bglight}>
            <FilterListIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid item xs container>
        <Grid item xs>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            indicatorColor="secondary"
            variant="fullWidth"
            aria-label="categories filters tabs"
          >
            {tabTitles.map((el, idx) => (
              <Tab key={idx} value={el} label={el} {...tabprops(el)} />
            ))}
          </Tabs>
        </Grid>
      </Grid>

      {!showMapView &&
      <Grid container justify="center">
        <TabPanel value={currentTab} index="All">
          <Grid container spacing={2}>
            <Grid item sm={12} md={6} lg={4} >
              {/* Instructions */}
              <CustomCard
                title="Instruction"
                withMoreAction
                body={
                  <ol>
                    {instructions.map((inst, index) => (
                      <li key={index}>{inst}</li>
                    ))}{" "}
                  </ol>
                }
                actions={
                  // <ThemeProvider theme={}>
                  <Button fullWidth color="primary" variant="contained">
                    {" "}
                    <Typography color="textPrimary">Redeem product</Typography> 
                  </Button>

                  // </ThemeProvider>
                }
              />
            </Grid>
            {Products
              .map((product,idx) => (
                <Grid key={idx} item sm={12} md={6} lg={4}>
                  <ProductCard
                    withMoreAction
                    title={product.name}
                    subheader={product.name}
                    price={product.price}
                    image={product.image}
                    link={`/buy/step1/${product.id}`}
                  />
                </Grid>
              ))}
          </Grid>
        </TabPanel>
        <TabPanel value={currentTab} index="Food & Drinks">
          Item two
        </TabPanel>
        <TabPanel value={currentTab} index="Health & Beauty">
          Item three
        </TabPanel>
      </Grid>}
    </Grid>
  );
}

Categories.propTypes = {};

export default Categories;

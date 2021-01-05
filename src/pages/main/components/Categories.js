import React, { useState } from "react";
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
import SearchIcon from '@material-ui/icons/Search';
import Icon from "@material-ui/core/Icon";
// Components
import CustomCard from "../../../components/CustomCard";
import ProductCard from "../../../components/ProductCard";
import TabPanel from "../../../components/TabPanel";
import MapViw from "./MapView";
// Fake products data

import Products from "../../../data/products";

const items = [
  {
    icon: "/assets/imgs/map/dark_baloon.svg",
    lon: 40.72716048233949,
    lat: -73.79508833726857,
  },
  {
    icon: "/assets/imgs/map/dark_baloon.svg",
    lon: 40.72104600423599,
    lat: -73.81517271730615,
  },
  {
    icon: "/assets/imgs/map/dark_baloon.svg",
    lon: 40.71876919334091,
    lat: -73.80135397719482,
  },
  {
    icon: "/assets/imgs/map/dark_baloon.svg",
    lon: 40.72703039290949,
    lat: -73.82358412433044,
  },
  {
    icon: "/assets/imgs/map/dark_baloon.svg",
    lon: 40.715256246625714,
    lat: -73.84504179531078,
  },
  {
    icon: "/assets/imgs/map/dark_baloon.svg",
    lon: 40.72176155729061,
    lat: -73.82401327775005,
  },
].map((el, idx) => ({ id: idx, ...el }));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bglight: {
    backgroundColor: theme.palette.primary.light,
  },
  categoriesHead: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      justifyContent: "start",
      "& *": {
        marginRight: theme.spacing(2),
      },
    },
  },
  searchFilterInput: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  lgUp: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const tabprops = (index) => {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
};

const tabTitles = [
  "All",
  "Food & Drins",
  "Health & Beauty",
  "Sports & Hobbies",
  "Children",
  "For home, garden & pets",
  "Restaurants",
  "Entertainment",
];
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
      <Grid item xs={12} container direction="row" alignItems="center">
        <Grid item xs={12} lg={3}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            className={classes.categoriesHead}
          >
            <Typography component="span" variant="h4">
              Categories
            </Typography>
            <Link
              href={"#"}
              underline="none"
              color="inherit"
              component="button"
              onClick={() => setShowMapView(!showMapView)}
            >
              <Typography
                component="span"
                variant="caption"
                color="textSecondary"
              >
                {!showMapView ? "Show on map" : "Show cards"}
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} lg={9} container direction="row">
          <Grid item xs={10}>
            <TextField
              fullWidth
              id="filled-search"
              label="Search"
              type="search"
              variant="filled"
              className={classes.searchFilterInput}
            />
          </Grid>
          <Grid item xs={2} container justify="center">
            <Button className={classes.lgUp}>
              {/* <SearchIcon /> */}
              <Icon>
                <img src="/assets/imgs/icons/search_icon.svg" alt="" />
              </Icon>
            </Button>
            <Button className={classes.bglight}>
              {/* <FilterListIcon /> */}
              <Icon>
                <img src="/assets/imgs/icons/filter_icon.svg" alt="" />
              </Icon>
            </Button>
          </Grid>
        </Grid>
      </Grid>
        <Grid item xs={12} container>
          <Grid item xs>
            <Tabs
              value={currentTab}
              onChange={handleChange}
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="categories filters tabs"
            >
              {tabTitles.map((el, idx) => (
                <Tab key={idx} value={el} label={el} {...tabprops(el)} />
              ))}
            </Tabs>
          </Grid>
        </Grid>

      {!showMapView && (
        <Grid item xs={12} container justify="center">
          <TabPanel value={currentTab} index="All">
            <Grid container spacing={2}>
              <Grid item sm={12} md={6} lg={4}>
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
                      <Typography color="textPrimary">
                        Redeem product
                      </Typography>
                    </Button>

                    // </ThemeProvider>
                  }
                />
              </Grid>
              {Products.map((product, idx) => (
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
            Food & drinks
          </TabPanel>
          <TabPanel value={currentTab} index="Health & Beauty">
            Health & beauty
          </TabPanel>
        </Grid>
      )}

      {showMapView && (
        <Grid item xs={12} container justify="center">
          <TabPanel value={currentTab} index="All" style={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/* Map view */}
                <MapViw items={items} />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={currentTab} index="Food & Drinks">
            Food & drinks
          </TabPanel>
          <TabPanel value={currentTab} index="Health & Beauty">
            Health & beauty
          </TabPanel>
        </Grid>
      )}
    </Grid>
  );
}

Categories.propTypes = {};

export default Categories;

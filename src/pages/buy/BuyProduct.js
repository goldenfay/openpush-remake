import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import {
  Grid,
  Tabs,
  Tab,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import successFailTheme from "../../themes/success-fail";
// Components
import TabPanel from "../../components/TabPanel";
import ProductCard from "../../components/ProductCard";
import CustomModal from "../../components/CustomModal";
import RedeemProduct from "./components/RedeemProduct";
import MissingRabbits from "./components/MissingRabbits";

const useStyles = makeStyles((theme) => ({
  centered: {
    display: "flex",
    justifyContent: "center",
  },
  sectionHeader: {
    paddingLeft: theme.spacing(2),
  },
  media: {
    width: "100%",
    paddingTop: "56.25%", // 16:9
  },
  countItem: {
    "&:last-child": {
      borderRight: "none",
    },
    "& *": {
      position: "relative",
      zIndex: 4,
      // borderRight: '1px solid white',
      background: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.3,
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  },
}));

const tabprops = (index) => {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
};
const tabTitles = ["Instruction", "Specific rules", "Please note"];
const instructions = [
  "Redeem your ticket for 0 Rabbits",
  "Go to your favourite supermarket and spent minimum 25 leva on Groceries",
  "Activate your golden ticket",
  "Take a picture of your bill within 2 hours of purchase (maximum once a day) to enter the Tombola",
];

export const PromotionCountDow = (props) => {
  const cols = [
    { label: "Days", value: props.days },
    { label: "Hours", value: props.hours },
    { label: "Minutes", value: props.minutes },
    { label: "Seconds", value: props.seconds },
  ];
  return (
    <Grid
      container
      className={props.classes ? props.classes.countItem : ""}
      spacing={1}
    >
      {cols.map((el, idx) => (
        <Grid
          key={idx}
          item
          xs={3}
          container
          justify="center"
          direction="column"
        >
          <Typography align="center" variant="h3">
            {el.value}
          </Typography>
          <Typography align="center" variant="caption" color="textSecondary">
            {el.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
PromotionCountDow.prototype = {
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

function BuyStep1(props) {
  const classes = useStyles();
  const theme = createMuiTheme(successFailTheme);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(props.product && props.product.price>10000?<MissingRabbits />:<RedeemProduct confirmHandler={()=>console.log()} cancelHandler={()=>console.log()}/>);

  const [currentTab, setCurrentTab] = useState(tabTitles[0]);

  const handleChange = (e, val) => {
    setCurrentTab(val);
  };
  return (
    <Grid container spacing={3} direction="column">
      <CustomModal
        body={page}
        open={open}
        handleClose={() => setOpen(false)}
        maxWidth={"sm"}
        style={{minHeight: "300px"}}
      />
      <Grid item xs container spacing={3} direction="row" justify="center">
        {/* Wheel */}
        <Grid item xs={12} lg={6} container direction="row" justify="center">
          <CardMedia
            className={classes.media}
            image="/assets/dummy/buy/shop_thumbnail.png"
          />
          {/* <img src="/assets/dummy/buy/shop_thumbnail.png" alt="" /> */}
        </Grid>
        {/* Infos */}
        <Grid
          item
          xs={12}
          lg={6}
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            className={classes.scoreContainer}
          >
            <Grid item container direction="column" justify="center">
              <Typography variant="h6" color="inherit" align="center">
                Voucher for Burger King
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                align="center"
              >
                FOOD AND DRINKS
              </Typography>
            </Grid>

            <Grid item xs={3} container direction="row" justify="flex-end">
              <Typography component="span" variant="h6" align="center">
                28 000
              </Typography>
            </Grid>
            <Grid item xs={2} container direction="row" justify="flex-start">
              <img src="/assets/dummy/main/rabbit.png" alt="" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs container justify="center" direction="row">
              <Typography
                component="span"
                variant="caption"
                color="secondary"
                align="center"
              >
                Promotion ending in
              </Typography>
            </Grid>
            <Grid item xs={12} container justify="center">
              <PromotionCountDow
                days={3}
                hours={12}
                minutes={55}
                seconds={6}
                classes={classes}
              />
            </Grid>
            <Grid item xs={12} container justify="center">
              <ThemeProvider theme={theme}>
                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  onClick={() => setOpen(true)}
                >
                  {" "}
                  <Typography color="textPrimary">Redeem product</Typography>
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Grid>
        {/* Tabs */}
        <Grid item xs container spacing={3} direction="column" justify="center">
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
          <TabPanel value={currentTab} index={tabTitles[0]}>
            <ol>
              {instructions.map((inst, index) => (
                <li key={index}>{inst}</li>
              ))}{" "}
            </ol>
          </TabPanel>
        </Grid>

        {/* Similar Sales */}
        <Grid item xs={12} container>
          <Grid item xs>
            <Typography variant="h4">Similar Sales</Typography>
          </Grid>
        </Grid>
        <Grid item xs container spacing={3} direction="row" justify="center">
          {[1, 2, 3, 4, 5]
            .map(
              (el) =>
                "Voucher for Burger King BGN Foodpanda Voucher For All Users"
            )
            .map((title, idx) => (
              <Grid key={idx} item sm={12} md={6} lg={4}>
                <ProductCard
                  withMoreAction
                  title={title}
                  subheader={title}
                  price={Math.random() * 100000}
                  image="/assets/dummy/main/burger_king.png"
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

BuyStep1.propTypes = {};

export default BuyStep1;
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {useParams} from "react-router-dom";
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

// Util function
import {getDateDifference} from '../../static/utils'

// Fake dB
import fakeProducts from '../../data/products'


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
  const deadLine=new Date(props.expirationDate);
  const [remainingTime,setRemainingTime]=useState(getDateDifference(deadLine));
  const [promotionExpired,setPromotionExpired]=useState(false);
  const cols = [
    { label: "Days", value: props.days },
    { label: "Hours", value: props.hours },
    { label: "Minutes", value: props.minutes },
    { label: "Seconds", value: props.seconds },
  ];

  useEffect(()=>{
    let x=setInterval(function() {

      const remains=getDateDifference(deadLine);
      setRemainingTime(remains)
          
    
        
        // If the count down is over, write some text 
        if (remains.distance < 0) {
            clearInterval(x);
            setPromotionExpired(true)
            
        }
        
      }, 1000);

},[])

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
            {idx===0 && remainingTime.days}
            {idx===1 && remainingTime.hours}
            {idx===2 && remainingTime.minutes}
            {idx===3 && remainingTime.seconds}
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
  // days: PropTypes.number.isRequired,
  // hours: PropTypes.number.isRequired,
  // minutes: PropTypes.number.isRequired,
  // seconds: PropTypes.number.isRequired,
  expirationDate: PropTypes.object.isRequired,

};

function BuyStep1(props) {

  const classes = useStyles();
  const theme = createMuiTheme(successFailTheme);
  const params=useParams();
  const redeemPage=(<RedeemProduct confirmHandler={()=>console.log()} cancelHandler={()=>console.log()}/>);

  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(redeemPage);
  const [currentTab, setCurrentTab] = useState(tabTitles[0]);
  const [product, setProduct] = useState(props.product);

    // Fetch the DB to get the product passed in parms
  useEffect(()=>{
    const search=fakeProducts.find(el=>el.id===Number(params.product))
    console.log(params.product,search)

    setProduct(search);

  }, [])


  

  const handleChange = (e, val) => {
    setCurrentTab(val);
  };

  const redeemProduct=()=>{
    const userCredit=props.user.rabbits;
    const {price}=props.product;

    if(userCredit>price) setPage(redeemPage)
    else setPage(<MissingRabbits/>)

    setOpen(true)
  }
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
                {product && product.name}
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                align="center"
              >
                {product && product.name}
              </Typography>
            </Grid>

            <Grid item xs={3} container direction="row" justify="flex-end">
              <Typography component="span" variant="h6" align="center">
                {product && product.price }
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
                // days={3}
                // hours={12}
                // minutes={55}
                // seconds={6}
                expirationDate={new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate()+1   )}
                classes={classes}
              />
            </Grid>
            <Grid item xs={12} container justify="center">
              <ThemeProvider theme={theme}>
                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  onClick={() => redeemProduct()}
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
          {fakeProducts
            .map((product, idx) => (
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
      </Grid>
    </Grid>
  );
}

BuyStep1.propTypes = {
  product: PropTypes.object.isRequired
};

BuyStep1.defaultProps = {
  product: {
    id: 23,
    name: "Voucher for Burger King",
    price: 21000
  }
}
const mapStateToProps = (state) => ({
  user: state.userState.user
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyStep1)

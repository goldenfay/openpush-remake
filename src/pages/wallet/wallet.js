import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

// Components
import CustomCard from "../../components/CustomCard";
import ProductCard from "../../components/ProductCard";
import SocialMediaFooter from "../../components/SocialMediaFooter";

// Fake dB
import fakeProducts from '../../data/products'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  bglight: {
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.up("lg")]: {
      justifySelf: "flex-end",
     
    },
  },
  section: {
    marginTop: theme.spacing(3),
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
    // [theme.breakpoints.up("lg")]: {
    //   display: "none",
    // },
  },
  lgUp: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const instructions = [
  "Redeem your ticket for 0 Rabbits",
  "Go to your favourite supermarket and spent minimum 25 leva on Groceries",
  "Activate your golden ticket",
  "Take a picture of your bill within 2 hours of purchase (maximum once a day) to enter the Tombola",
];

function Wallet(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} container direction="row">
        <Grid item xs={12} lg={3} className={classes.categoriesHead}>
          
            <Typography component="span" variant="h4">
              My Wallet
            </Typography>
            
        </Grid>
        <Grid item xs={12} lg={9} container direction="row" justify="flex-end" spacing={2}>
          <Grid item xs={10} lg={4}>
            <TextField
              fullWidth
              id="filled-search"
              label="Search"
              type="search"
              variant="filled"
              InputProps={{
                endAdornment: <Icon>
                <img src="/assets/imgs/icons/search_icon.svg" alt="" />
              </Icon>
              }}
              className={classes.searchFilterInput}
            />
          </Grid>
          <Grid item xs={2} lg={1} container >
            {/* <Button className={classes.lgUp}>
              <Icon>
                <img src="/assets/imgs/icons/search_icon.svg" alt="" />
              </Icon>
            </Button> */}
            <Button className={classes.bglight}>
              {/* <FilterListIcon /> */}
              <Icon>
                <img src="/assets/imgs/icons/filter_icon.svg" alt="" />
              </Icon>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.section}>
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
                <Typography color="textPrimary">Redeem product</Typography>
              </Button>

              // </ThemeProvider>
            }
          />
        </Grid>
        {fakeProducts
          .map((product, idx) => (
            <Grid key={idx} item sm={12} md={6} lg={4}>
              <ProductCard
                    disabled={idx>=2}
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
      <Grid container spacing={2} className={classes.section}>
        <Grid item xs={12} container justify="center">
        <SocialMediaFooter/>

        </Grid>

      </Grid>
    </>
  );
}

Wallet.propTypes = {};

export default Wallet;

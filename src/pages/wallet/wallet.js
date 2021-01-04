import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";

// Components
import CustomCard from "../../components/CustomCard";
import ProductCard from "../../components/ProductCard";
import SocialMediaFooter from "../../components/SocialMediaFooter";

// Fake dB
import fakeProducts from '../../data/products'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bglight: {
    backgroundColor: theme.palette.primary.light,
  },
  section: {
    marginTop: theme.spacing(3),
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
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography component="span" variant="h5">
              My Wallet
            </Typography>
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
            />
          </Grid>
          <Grid item xs={2} container justify="center">
            <Button className={classes.bglight}>
              <FilterListIcon />
            </Button>
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

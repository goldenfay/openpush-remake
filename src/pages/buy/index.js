import React from "react";
import PropTypes from 'prop-types';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Components
import BuyProduct from "./BuyProduct";
import QRActivation from "./components/ActivationQR";
import ProductsCarousel from "../main/components/ProductionsCarousel";
import SocialMediaFooter from "../../components/SocialMediaFooter";
const carouselItems = [1, 2, 3, 4].map(
  (el) => "/assets/dummy/main/categories.png"
);

const useStyles = makeStyles((theme) => ({
  carousel: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  section: {
    marginTop: theme.spacing(4),
  },
  activationSection: {
      padding: theme.spacing(4),
    [theme.breakpoints.up('lg')]: {
        backgroundColor: "#494949",
       
   },
  }
}));

function ProductBuy(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.carousel}>
        <ProductsCarousel items={carouselItems} />
      </Grid>
      <Grid container className={`${classes.section} ${classes.activationSection}`}>
        <QRActivation activationDate={new Date('03-01-2021').toISOString()} />
      </Grid>
      <Grid container className={classes.section}>
        <BuyProduct />
      </Grid>
      <Grid container className={classes.section}>
        <SocialMediaFooter />
      </Grid>
    </div>
  );
}

ProductBuy.propTypes = {
  product: PropTypes.object.isRequired
};
ProductBuy.defaultProps = {
  product: {
    id: 23,
    name: "Voucher for Burger King",
    price: 21000
  }
}

export default ProductBuy;

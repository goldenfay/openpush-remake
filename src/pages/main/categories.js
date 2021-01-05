import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box} from "@material-ui/core";
//Components
import ProductsCarousel from './components/ProductionsCarousel';
import Categories from './components/Categories';
import SocialMadiaFooter from '../../components/SocialMediaFooter'
const carouselItems = [1, 2, 3, 4].map(
  (el) => "/assets/dummy/main/categories.jpg"
);
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  carousel: {
    minWidth: "100%",
  },
  indicator: {
    "&.active": {
      color: theme.palette.primary.main,
    },
  },
  box: {
    [theme.breakpoints.down("sm")]: {
      minwidth: theme.breakpoints.values.sm,
      maxWidth: theme.breakpoints.values.sm,
    },
    [theme.breakpoints.up("md")]: {
      width: theme.breakpoints.values.md,
      maxWidth: theme.breakpoints.values.md,
    },
    [theme.breakpoints.up("lg")]: {
      width: theme.breakpoints.values.lg,
      maxWidth: theme.breakpoints.values.lg,
    },
  },
}));

function CategoriesPage(props) {
  //   const classes = useStyles();
  const classes = useStyles();

  return (
    <>
     
      <Categories/>
      <SocialMadiaFooter/>
    </>
  );
}

CategoriesPage.propTypes = {};

export default CategoriesPage;

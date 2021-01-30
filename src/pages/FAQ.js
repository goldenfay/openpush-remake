import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles, withStyles } from "@material-ui/core/styles";
//Icons

const Menu = [
  {
    title: "What is Open Push?",
    body:
      "Open Push is a platform containing vouchers, discounts and products which everyone can redeem in exchange of Golden Rabbits. Golden Rabbits can be won absolutely free, which makes the platform one of a kind. You don`t pay anything, you can only win. Periodically, you will receive push notifications with hot offers from the platform ready to be redeemed in exchange of Golden Rabbits.",
  },
  {
    title: "What are the ways to win Golden Rabbits?",
    body: "I actualy have no idea",
  },
  {
    title: "Why you should accept to receive push notifications?",
    body: true,
  },
  {
    title:
      "How to connect your Sweet Clash account with your Open Push account?",
    body: "I actualy have no idea",
  },
  {
    title:
      "How to connect your Sweet Clash account with your Open Push account? How to connect your Sweet Clash account with your Open Push accountHow to connect your Sweet Clash account with your Open Push account?",
    body: "I actualy have no idea",
  },
  {
    title:
      "How to connect your Sweet Clash account with your Open Push account? How to connect your Sweet Clash account with your Open Push account?",
    linked: "I actualy have no idea",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },

  accordion: {
    // backgroundColor: theme.palette.grey[700],
    width: "100%",
    textTransform: "capitalize",
    borderRadius: "5px 5px 5px 5px",
    margin: "1px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
  },
  expendIcon: {
    color: theme.palette.secondary.main
  }
}));


const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

function FAQ(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <Grid container direction="column" className={classes.root}>
      {/* Head section */}
      <Grid item xs={12} container>
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width={1}
          >
            <Typography variant="h4">FAQ</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* Social media menu section */}
      <Grid item xs={12} container>
        {
          Menu.map((el,idx)=>(
        <Accordion key={idx} square expanded={expanded === el.title} onChange={handleChange(el.title)} className={classes.accordion}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" 
        expandIcon={expanded === el.title?<RemoveIcon className={classes.expendIcon}/>:<AddIcon className={classes.expendIcon}/>}>
          <Typography>{el.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="caption" color="textSecondary">
            {el.body}
          </Typography>
        </AccordionDetails>
      </Accordion>
          ))}
      </Grid>
    </Grid>
  );
}

FAQ.propTypes = {};

export default FAQ;

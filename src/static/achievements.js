import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useAchievementStyles = makeStyles((theme) => ({
  greenText: {
    fontWeight: "bold",
    backgroundColor: "rgba(189, 255, 105, 0.2)",
    "&::before": { backgroundColor: "rgba(189, 255, 105, 0.2)" },
    "& .specialText": {
      color: "#44B91B",
    },
  },
  redText: {
    fontWeight: "bold",
    backgroundColor: "rgba(125, 61, 175, 0.2)",
    "&::before": { backgroundColor: "rgba(125, 61, 175, 0.2)" },
    "& .specialText": {
      color: "#ED1C24",
    },
  },
  redOrangeText: {
    fontWeight: "bold",
    backgroundColor: "rgba(246, 108, 76, 0.2)",
    "&::before": { backgroundColor: "rgba(246, 108, 76, 0.2)" },
    "& .specialText": {
      color: "#F66C4C",
    },
  },
  greenBg: {
    backgroundColor: "#BDFF69",
  },
  redBg: {
    backgroundColor: "#7D3DAF",
  },
  redOrangeBg: {
    backgroundColor: "#F66C4C",
  },
}));

const achievemeents = [
  {
    id: "5_days_connection",
    body: (
      <Typography>
        Connect to openpush 5 consecutive day in a week to{" "}
        <strong className="specialText">win 20 000 rabbits</strong>.
      </Typography>
    ),
    icon: "/assets/imgs/tasks/rabbits.svg",
    className: "greenText",
  },
  {
    id: "first_viber_notification",
    body: (
      <Typography>
        Receive your first Viber notification to{" "}
        <strong className="specialText">win 5€</strong>.
      </Typography>
    ),
    icon: "/assets/imgs/tasks/viber.svg",
    className: "redText",
  },
  {
    id: "5_products_activations",
    body: (
      <Typography>
        <strong className="specialText">Activate 5</strong> differents product to
        collect a free voucher for your favorite shop.
      </Typography>
    ),
    icon: "/assets/imgs/tasks/credit-card.svg",
    className: "redOrangeText",
  },
  {
    id: "3_purchases_discount",
    body: (
      <Typography>
        Get <strong className="specialText">30% discount</strong> for you next
        purchase{" "}
        <strong className="specialText">after buying 3 different products </strong>.
      </Typography>
    ),
    icon: "/assets/imgs/tasks/rabbits.svg",
    className: "redText",
  },
];
export default achievemeents;

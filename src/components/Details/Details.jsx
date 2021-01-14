import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import useStyles from "./styles";
import useTransactions from "../../useTransaction";
import { Doughnut } from "react-chartjs-2";

function Details({ title }) {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <Card className={title === "Income" ? classes.income : classes.expenses}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
}

export default Details;

import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cn from "classnames";
import styles from "./Card.module.css";

const cardComponents = ({ cardTitle, cardSubtitle, value, className }) => {
  return (
    <Grid
      items
      xs={12}
      md={3}
      component={Card}
      className={cn(styles.card, className)}
    >
      <CardContent>
        <Typography color="textSecondary">{cardTitle}</Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={2} separator="," />
        </Typography>
        <Typography color="textSecondary">Orang</Typography>
        <Typography variant="body2">{cardSubtitle}</Typography>
      </CardContent>
    </Grid>
  );
};

export default cardComponents;

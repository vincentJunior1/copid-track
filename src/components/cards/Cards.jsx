import React from "react";
import styles from "./Cards.module.css";
import Grid from "@material-ui/core/Grid";
import CardComponents from "./card/Card";
const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return "Loading";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponents
          cardTitle="Kasus"
          cardSubtitle="Jumlah Angka Kasus Covid-19"
          value={confirmed.value}
          className={styles.confirm}
        />
        <CardComponents
          cardTitle="Sembuh"
          cardSubtitle="Jumlah Angka Sembuh Covid-19"
          value={recovered.value}
          className={styles.recovered}
        />
        <CardComponents
          cardTitle="Meninggal"
          cardSubtitle="Jumlah Angka Meninggal Covid-19"
          value={deaths.value}
          className={styles.death}
        />
      </Grid>
    </div>
  );
};

export default Cards;

import React, { useState, useEffect } from "react";
import { FormControl } from "@material-ui/core";
import { NativeSelect } from "@material-ui/core";
import axios from "axios";
import styles from "./PickCountry.module.css";

const PickCountry = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountry();
  }, []);
  function getCountry() {
    axios
      .get("https://covid19.mathdro.id/api/countries")
      .then((result) => {
        setCountries(result.data.countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(event) => handleCountryChange(event)}>
        <option value="">Global</option>
        {countries.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default PickCountry;

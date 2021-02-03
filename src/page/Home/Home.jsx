import React from "react";
import styles from "./Home.module.css";
import imageHeader from "../../image/head.png";
import Typography from "@material-ui/core/Typography";
import PickCountry from "../../components/PickCountry/PickCountry";
import Cards from "../../components/cards/Cards";
import axios from "axios";
// import {Link} from 'react-router-dom'

class Home extends React.Component {
  state = {
    name: "Vincent Junior",
    data: {},
  };

  componentDidMount() {
    console.log("Component did mount is running");
    this.getData();
  }

  handleCountryChange = (event) => {
    const country = event.target.value;
    this.getData(country);
    const setCountry = country ? country : "global";
    this.props.history.push({
      search: "?country=" + setCountry,
    });
  };

  getData = (country) => {
    let setUrl = "https://covid19.mathdro.id/api";
    setUrl = country ? `${setUrl}/countries/${country}` : setUrl;
    axios
      .get(setUrl)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // console.log(this.state.name) buat pengecekan data aja
    const { data } = this.state;
    const lastUpdate = new Date(data.lastUpdate).toDateString();
    return (
      <div className={styles.container}>
        <img className={styles.image} src={imageHeader} alt="Covid-19" />
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Terakhir Update: {lastUpdate}
        </Typography>
        <PickCountry handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        {/* <Link to='/about' >About</Link>
                <h1>Halaman Home</h1>
                <h1>Hallo {this.state.name}</h1> */}
      </div>
    );
  }
}

export default Home;

import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        name : "",
        capital : "",
        flag : "",
        population : "",
        region : "",
    };
    this.CountryFrance = this.CountryFrance.bind(this);
    this.CountryBrazil = this.CountryBrazil.bind(this);
    this.CountryCroatia = this.CountryCroatia.bind(this);
  }

  componentDidMount() {
		fetch("https://restcountries.com/v3.1/name/france")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      this.setState({
        name: res[0].name.common,
        capital: res[0].capital[0],
        flag: res[0].flags.png,
        population: res[0].population,
        region: res[0].region,
      });
		});   
}

  CountryFrance(country) {
    this.setState({ name: country });
  }
  CountryBrazil(country) {
    this.setState({ name: country });
  }
  CountryCroatia(country) {
    this.setState({ name: country });
  }

  render(){
    return (
      <>
      <div className="d-flex flex-column ">
        <h1>Country Selector</h1>
          Pays: {this.state.name}<br/>
          Capital: {this.state.capital}<br/>
          Drapeau:
          <img
            className="flag"
            src={this.state.flag}
            alt={`This is the flag of :${this.state.name}`}
          />
            Population:{this.state.population}<br/>
             Region: {this.state.region}<br/>
      </div>
      </>

    );
  }
}

export default App;

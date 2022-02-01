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
    this.getCountry = this.getCountry.bind(this);
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

 async getCountry(country) {
    await this.setState({ name: country });
    await fetch("https://restcountries.com/v3.1/name/"+ this.state.name)
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
          <h1>Country Selector</h1>
          <Button onClick={this.getCountry}>France</Button>
          <Button onClick={this.getCountry}>Brazil</Button>
          <Button onClick={this.getCountry}>Croatia</Button>

        <div className="d-flex flex-column ">
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

import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "./components/Button";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar"

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

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      fetch("https://restcountries.com/v3.1/name/" + this.state.name)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            name: res[0].name.common,
            capital: res[0].capital[0],
            flag: res[0].flags.png,
            population: res[0].population,
            region: res[0].region,
          });
        })
      }
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
  getCountry(country) {
    this.setState({ name: country });
  }

  render(){
    return (
      <>
        <div className="text-center"> 
          <h1>Country Selector</h1> <br/>
          <SearchBar onClick={this.getCountry}/>
          {/* <Button onClick={this.getCountry}>France</Button>
          <Button onClick={this.getCountry}>Brazil</Button>
          <Button onClick={this.getCountry}>Croatia</Button> */}
        </div>
          <Card
            name= {this.state.name}
            capital= {this.state.capital}
            flag= {this.state.flag}
            population= {this.state.population}
            region= {this.state.region}
          />
      </>

    );
  }
}

export default App;

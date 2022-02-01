import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

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
  }

  componentDidMount() {
		fetch("https://restcountries.com/v3.1/name/france")
			.then((res) => res.json())
			.then((res) => {
				this.setState({countries: res});
			});
}
  render(){
    return (
      <>
        <h1>Country Selector</h1>
        <p>{this.state.flag}</p>
        <p> Country : {this.state.name}</p>
        <p> Capital: {this.state.capital}</p>
        <p> Population: {this.state.population}</p>
        <p> Region: {this.state.region}</p>
      </>
    );
  }
}

export default App;

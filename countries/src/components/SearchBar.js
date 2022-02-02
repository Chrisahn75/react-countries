import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.Submit = this.Submit.bind(this);
    this.SearchCountry = this.SearchCountry.bind(this);
  }

  Submit(e) {
    e.preventDefault();
  }
  SearchCountry(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.Submit}>
        <input type="text" onChange={this.SearchCountry} />
        <button onClick={() => this.props.onClick(this.state.name)}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
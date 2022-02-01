import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Card extends React.Component {
    render() {
      return (
        <>
            <div className="card w-100">
            <img src={this.props.flag} className="flag" alt="flag" />
            <ul className="list-group">
              <li className="list-group-item">Country: {this.props.name}</li>
              <li className="list-group-item">Capital: {this.props.capital}</li>
              <li className="list-group-item">Region: {this.props.region}</li>
              <li className="list-group-item">Population: {this.props.population}
              </li>
            </ul>
          </div>
        </>
      );
    }
  }

export default Card;
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Button extends React.Component {
    render() {
      return (
        <>
          <button
            onClick={() => this.props.onClick(this.props.children)}
          >
            {this.props.children}
          </button>
        </>
      );
    }
  }
  export default Button;
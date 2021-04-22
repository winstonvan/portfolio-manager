import React from "react";
import NumberFormat from "react-number-format";
import "../styles/Header.css";

class Header extends React.Component {
  render() {
    var value = "58237.23";
    value = value.numb;

    return (
      <div className="header">
        <div className="title">Portfolio Value</div>
        <div className="portfolio__value">23453425.34</div>
      </div>
    );
  }
}

export default Header;

import React from "react";
import "./Header.css";

const Header = () => {
  const budgetAmount = 1000000;
  return (
    <div className="header-container">
      <h1>RemoteFind</h1>
      <p>Find your remote workforce instantly</p>
      <p className="bold">Total Yearly Budget: $ {budgetAmount}</p>
    </div>
  );
};

export default Header;

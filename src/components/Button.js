import React from "react";
import { Link } from "react-router-dom";

export const Button = () => {
  return (
    <Link to="/register">
      <button className="btn">Register</button>
    </Link>
  );
};

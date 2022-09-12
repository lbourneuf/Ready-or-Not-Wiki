import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div>
      <h1 className="error-title">404 ERROR</h1>
      <h1 className="error-message">This page does not exist :(</h1>
      <div className="button-container">
        <Link to="/">
          <button className="error-btn">Back to Home</button>
        </Link>
      </div>
      <div className="error-gif-container">
        <img
          className="error-gif"
          src="https://steamuserimages-a.akamaihd.net/ugc/1830172100559956706/6A8125B15BF7090B8CF110D3FE5C752DB58C0092/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        />
      </div>
    </div>
  );
};

export default PageNotFound;

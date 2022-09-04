import React from "react";

const Deployables = ({ deployables, setDeployables }) => {
  return (
    <div className="all-deployables-container">
      {deployables && deployables.length ? (
        deployables.map((deploy) => {
          return (
            <div key={deploy.id} className="all-deployables">
              <a href={`/deployables/${deploy.id}`}>
                <h1>{deploy.name}</h1>
              </a>
              <h3>{deploy.description}</h3>
              <img src={deploy.image_url} />
            </div>
          );
        })
      ) : (
        <h1> No deployables to display</h1>
      )}
    </div>
  );
};

export default Deployables;

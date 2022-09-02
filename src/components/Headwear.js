import React from "react";

const Headwear = ({ headwear, setHeadwear }) => {
  return (
    <div className="all-headwear-container">
      {headwear && headwear.length ? (
        headwear.map((head) => {
          return (
            <div key={head.id} className="all-headwear">
              <h1>{head.name}</h1>
              <h3>{head.description}</h3>
              <img src={head.image_url} />
            </div>
          );
        })
      ) : (
        <h1>No headwear to display</h1>
      )}
    </div>
  );
};
export default Headwear;

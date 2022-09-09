import React from "react";

const Headwear = ({ headwear, setHeadwear }) => {
  return (
    <div className="all-headwear-container">
      {headwear && headwear.length ? (
        headwear.map((head) => {
          return (
            <div key={head.id} className="all-headwear">
              <a className="item-name" href={`/headwear/${head.id}`}>
                <h1 className="item-name">{head.name}</h1>
              </a>
              <h3>{head.description}</h3>
              <img className="headwear-img" src={head.image_url} />
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

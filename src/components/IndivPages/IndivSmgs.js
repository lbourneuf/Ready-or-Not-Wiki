import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSubmachineGunById } from "../../axios-services";
import { Link } from "react-router-dom";

const IndivSmg = ({ indivSmg, setIndivSmg }) => {
  const { smgId } = useParams();

  useEffect(() => {
    const fetchSmgById = async () => {
      if (!smgId) {
        return;
      }
      try {
        const indivSmgData = await getSubmachineGunById(smgId);
        setIndivSmg(indivSmgData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSmgById();
  }, [smgId]);
  return (
    <div className="indiv-smgs-container">
      {indivSmg && indivSmg.id ? (
        <div className="indiv-smg" key={indivSmg.id}>
          <h1>{indivSmg.name}</h1>
          <h3>{indivSmg.description}</h3>
          <p>Caliber: {indivSmg.caliber}</p>
          <p>Magazine Size: {indivSmg.magazine_size}</p>
          <img className="indiv-smg-img" src={indivSmg.image_url} />

          <div className="backto-container">
            <Link to="/submachineguns/">
              <button className="backto">Back to all Submachine Guns</button>
            </Link>
          </div>
        </div>
      ) : (
        <h1>No SMGS to display</h1>
      )}
    </div>
  );
};

export default IndivSmg;

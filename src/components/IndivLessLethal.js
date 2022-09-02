import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLessLethalById } from "../axios-services";
import { Link } from "react-router-dom";

const IndivLessLethal = ({ indivLessLethal, setIndivLessLethal }) => {
  const { lessLethalId } = useParams();

  useEffect(() => {
    const fetchLessLethalById = async () => {
      if (!lessLethalId) {
        return;
      }

      try {
        const indivLessLethalData = await getLessLethalById(lessLethalId);
        setIndivLessLethal(indivLessLethalData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLessLethalById();
  }, [lessLethalId]);
  return (
    <div className="all-less-lethals">
      {indivLessLethal && indivLessLethal.id ? (
        <div className="indiv-less-lethal" key={indivLessLethal.id}>
          <h1>{indivLessLethal.name}</h1>
          <h3>{indivLessLethal.description}</h3>
          <img src={indivLessLethal.image_url} />

          <Link to="/lesslethals" className="backto">
            Back to all less lethals
          </Link>
        </div>
      ) : (
        <h1>No less lethal to display</h1>
      )}
    </div>
  );
};

export default IndivLessLethal;

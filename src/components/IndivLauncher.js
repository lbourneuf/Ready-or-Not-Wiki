import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLauncherById } from "../axios-services";
import { Link } from "react-router-dom";

const IndivLauncher = ({ indivLauncher, setIndivLauncher }) => {
  const { launcherId } = useParams();

  useEffect(() => {
    const fetchLauncherById = async () => {
      if (!launcherId) {
        return;
      }

      try {
        const indivLauncherData = await getLauncherById(launcherId);
        setIndivLauncher(indivLauncherData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLauncherById();
  }, [launcherId]);
  return (
    <div className="all-launchers">
      {indivLauncher && indivLauncher.id ? (
        <div className="indiv-launcher" key={indivLauncher.id}>
          <h1>{indivLauncher.name}</h1>
          <h3>{indivLauncher.description}</h3>
          <img src={indivLauncher.image_url} />

          <Link to="/launchers/" className="backto">
            Back to all launchers
          </Link>
        </div>
      ) : (
        <h1>No launcher to display</h1>
      )}
    </div>
  );
};

export default IndivLauncher;

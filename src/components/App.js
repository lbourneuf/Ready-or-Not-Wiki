import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Maps,
  Homepage,
  Missions,
  AssaultRifles,
  SubmachineGuns,
  Shotguns,
  Launchers,
  LessLethals,
  Sidearms,
  AmmoTypes,
} from "./index";
import "../style/App.css";
import {
  getAllAmmoTypes,
  getAllAssaultRifles,
  getAllLaunchers,
  getAllLessLethals,
  getAllMaps,
  getAllMissions,
  getAllShotguns,
  getAllSidearms,
  getAllSubmachineGuns,
} from "../axios-services";

const App = () => {
  const [maps, setMaps] = useState([]);
  const [missions, setMissions] = useState([]);
  const [assaultRifles, setAssaultRifles] = useState([]);
  const [smgs, setSmgs] = useState([]);
  const [shotguns, setShotguns] = useState([]);
  const [launchers, setLaunchers] = useState([]);
  const [lessLethals, setLessLethals] = useState([]);
  const [sidearms, setSidearms] = useState([]);
  const [ammoTypes, setAmmoTypes] = useState([]);

  useEffect(() => {
    const fetchAllMaps = async () => {
      try {
        const maps = await getAllMaps();

        setMaps(maps);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllMaps();

    const fetchAllMissions = async () => {
      try {
        const missions = await getAllMissions();

        setMissions(missions);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllMissions();

    const fetchAllAssaultRifles = async () => {
      try {
        const rifles = await getAllAssaultRifles();

        setAssaultRifles(rifles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllAssaultRifles();

    const fetchAllSubmachineGuns = async () => {
      try {
        const smg = await getAllSubmachineGuns();

        setSmgs(smg);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllSubmachineGuns();

    const fetchAllShotguns = async () => {
      try {
        const shotgun = await getAllShotguns();

        setShotguns(shotgun);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllShotguns();

    const fetchAllLaunchers = async () => {
      try {
        const launcher = await getAllLaunchers();

        setLaunchers(launcher);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllLaunchers();

    const fetchAllLessLethals = async () => {
      try {
        const lethal = await getAllLessLethals();

        setLessLethals(lethal);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllLessLethals();

    const fetchAllSidearms = async () => {
      try {
        const sidearm = await getAllSidearms();

        setSidearms(sidearm);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllSidearms();

    const fetchAllAmmoTypes = async () => {
      try {
        const ammo = await getAllAmmoTypes();
        console.log("These are the ammo types", ammo);
        setAmmoTypes(ammo);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllAmmoTypes();
  }, []);
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/maps"
            element={<Maps maps={maps} setMaps={setMaps} />}
          />
          <Route
            path="/missions"
            element={<Missions missions={missions} setMissions={setMissions} />}
          />
          <Route
            path="/assaultrifles"
            element={
              <AssaultRifles
                assaultRifles={assaultRifles}
                setAssaultRifles={setAssaultRifles}
              />
            }
          />
          <Route
            path="/submachineguns"
            element={<SubmachineGuns smgs={smgs} setSmgs={setSmgs} />}
          />

          <Route
            path="/shotguns"
            element={<Shotguns shotguns={shotguns} setShotguns={setShotguns} />}
          />

          <Route
            path="/launchers"
            element={
              <Launchers launchers={launchers} setLaunchers={setLaunchers} />
            }
          />
          <Route
            path="/lesslethals"
            element={
              <LessLethals
                lessLethals={lessLethals}
                setLessLethals={setLessLethals}
              />
            }
          />

          <Route
            path="/sidearms"
            element={<Sidearms sidearms={sidearms} setSidearms={setSidearms} />}
          />

          <Route
            path="/ammotypes"
            element={
              <AmmoTypes ammoTypes={ammoTypes} setAmmoTypes={setAmmoTypes} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

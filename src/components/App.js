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
  Armor,
  Tacticals,
  Grenades,
  Deployables,
  Headwear,
  ArmorMaterial,
  IndivMap,
  IndivMission,
  IndivAssaultRifle,
  IndivSmg,
  IndivShotgun,
  IndivLauncher,
  IndivLessLethal,
  IndivSidearm,
  IndivAmmoType,
  IndivArmor,
  IndivTactical,
  IndivGrenade,
  IndivDeployable,
  IndivHeadwear,
  IndivArmorMaterial,
  PageNotFound,
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
  getAllArmor,
  getAllTacticals,
  getAllGrenades,
  getAllDeployables,
  getAllHeadwear,
  getAllArmorMaterial,
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
  const [armor, setArmor] = useState([]);
  const [tacticals, setTacticals] = useState([]);
  const [grenades, setGrenades] = useState([]);
  const [deployables, setDeployables] = useState([]);
  const [headwear, setHeadwear] = useState([]);
  const [armorMaterial, setArmorMaterial] = useState([]);
  const [indivMap, setIndivMap] = useState([]);
  const [indivMission, setIndivMission] = useState([]);
  const [indivAssaultRifle, setIndivAssaultRifle] = useState([]);
  const [indivSmg, setIndivSmg] = useState([]);
  const [indivShotgun, setIndivShotgun] = useState([]);
  const [indivLauncher, setIndivLauncher] = useState([]);
  const [indivLessLethal, setIndivLessLethal] = useState([]);
  const [indivSidearm, setIndivSidearm] = useState([]);
  const [indivAmmoType, setIndivAmmoType] = useState([]);
  const [indivArmor, setIndivArmor] = useState([]);
  const [indivTactical, setIndivTactical] = useState([]);
  const [indivGrenade, setIndivGrenade] = useState([]);
  const [indivDeployable, setIndivDeployable] = useState([]);
  const [indivHeadwear, setIndivHeadwear] = useState([]);
  const [indivArmorMaterial, setIndivArmorMaterial] = useState([]);
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

        setAmmoTypes(ammo);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllAmmoTypes();

    const fetchAllArmor = async () => {
      try {
        const armor = await getAllArmor();

        setArmor(armor);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllArmor();

    const fetchAllTacticals = async () => {
      try {
        const tacticals = await getAllTacticals();

        setTacticals(tacticals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllTacticals();

    const fetchAllGrenades = async () => {
      try {
        const grenades = await getAllGrenades();

        setGrenades(grenades);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllGrenades();

    const fetchAllDeployables = async () => {
      try {
        const deploy = await getAllDeployables();

        setDeployables(deploy);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllDeployables();

    const fetchAllHeadwear = async () => {
      try {
        const head = await getAllHeadwear();

        setHeadwear(head);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllHeadwear();

    const fetchAllArmorMaterial = async () => {
      try {
        const material = await getAllArmorMaterial();
        console.log("These are the armor materials", material);
        setArmorMaterial(material);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllArmorMaterial();
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
            path="/maps/:mapId"
            element={<IndivMap indivMap={indivMap} setIndivMap={setIndivMap} />}
          />
          <Route
            path="/missions"
            element={<Missions missions={missions} setMissions={setMissions} />}
          />
          <Route
            path="/missions/:missionId"
            element={
              <IndivMission
                indivMission={indivMission}
                setIndivMission={setIndivMission}
              />
            }
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
            path="/assaultrifles/:assaultRifleId"
            element={
              <IndivAssaultRifle
                indivAssaultRifle={indivAssaultRifle}
                setIndivAssaultRifle={setIndivAssaultRifle}
              />
            }
          />
          <Route
            path="/submachineguns"
            element={<SubmachineGuns smgs={smgs} setSmgs={setSmgs} />}
          />

          <Route
            path="/submachineguns/:smgId"
            element={<IndivSmg indivSmg={indivSmg} setIndivSmg={setIndivSmg} />}
          />

          <Route
            path="/shotguns"
            element={<Shotguns shotguns={shotguns} setShotguns={setShotguns} />}
          />

          <Route
            path="/shotguns/:shotgunId"
            element={
              <IndivShotgun
                indivShotgun={indivShotgun}
                setIndivShotgun={setIndivShotgun}
              />
            }
          />

          <Route
            path="/launchers"
            element={
              <Launchers launchers={launchers} setLaunchers={setLaunchers} />
            }
          />

          <Route
            path="/launchers/:launcherId"
            element={
              <IndivLauncher
                indivLauncher={indivLauncher}
                setIndivLauncher={setIndivLauncher}
              />
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
            path="/lesslethals/:lessLethalId"
            element={
              <IndivLessLethal
                indivLessLethal={indivLessLethal}
                setIndivLessLethal={setIndivLessLethal}
              />
            }
          />

          <Route
            path="/sidearms"
            element={<Sidearms sidearms={sidearms} setSidearms={setSidearms} />}
          />

          <Route
            path="/sidearms/:sidearmId"
            element={
              <IndivSidearm
                indivSidearm={indivSidearm}
                setIndivSidearm={setIndivSidearm}
              />
            }
          />

          <Route
            path="/ammotypes"
            element={
              <AmmoTypes ammoTypes={ammoTypes} setAmmoTypes={setAmmoTypes} />
            }
          />

          <Route
            path="/ammotypes/:ammoTypeId"
            element={
              <IndivAmmoType
                indivAmmoType={indivAmmoType}
                setIndivAmmoType={setIndivAmmoType}
              />
            }
          />

          <Route
            path="/armor"
            element={<Armor armor={armor} setArmor={setArmor} />}
          />

          <Route
            path="/armor/:armorId"
            element={
              <IndivArmor
                indivArmor={indivArmor}
                setIndivArmor={setIndivArmor}
              />
            }
          />

          <Route
            path="/tacticals"
            element={
              <Tacticals tacticals={tacticals} setTacticals={setTacticals} />
            }
          />

          <Route
            path="/tacticals/:tacticalId"
            element={
              <IndivTactical
                indivTactical={indivTactical}
                setIndivTactical={setIndivTactical}
              />
            }
          />

          <Route
            path="/grenades"
            element={<Grenades grenades={grenades} setGrenades={setGrenades} />}
          />

          <Route
            path="/grenades/:grenadeId"
            element={
              <IndivGrenade
                indivGrenade={indivGrenade}
                setIndivGrenade={setIndivGrenade}
              />
            }
          />

          <Route
            path="/deployables"
            element={
              <Deployables
                deployables={deployables}
                setDeployables={setDeployables}
              />
            }
          />

          <Route
            path="/deployables/:deployableId"
            element={
              <IndivDeployable
                indivDeployable={indivDeployable}
                setIndivDeployable={setIndivDeployable}
              />
            }
          />

          <Route
            path="/headwear"
            element={<Headwear headwear={headwear} setHeadwear={setHeadwear} />}
          />

          <Route
            path="/headwear/:headwearId"
            element={
              <IndivHeadwear
                indivHeadwear={indivHeadwear}
                setIndivHeadwear={setIndivHeadwear}
              />
            }
          />

          <Route
            path="/armormaterial"
            element={
              <ArmorMaterial
                armorMaterial={armorMaterial}
                setArmorMaterial={setArmorMaterial}
              />
            }
          />

          <Route
            path="/armormaterial/:materialId"
            element={
              <IndivArmorMaterial
                indivArmorMaterial={indivArmorMaterial}
                setIndivArmorMaterial={setIndivArmorMaterial}
              />
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

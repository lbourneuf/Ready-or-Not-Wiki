import axios from "axios";

export async function getAllMaps() {
  try {
    const { data } = await axios.get("/api/maps");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMapById(mapId) {
  try {
    const { data } = await axios.get(`/api/maps/${mapId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllMissions() {
  try {
    const { data } = await axios.get("/api/missions");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMissionById(missionId) {
  try {
    const { data } = await axios.get(`/api/missions/${missionId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllAssaultRifles() {
  try {
    const { data } = await axios.get("/api/assaultrifles");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAssaultRifleById(rifleId) {
  try {
    const { data } = await axios.get(`/api/assaultrifles/${rifleId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllSubmachineGuns() {
  try {
    const { data } = await axios.get("/api/submachineguns");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getSubmachineGunById(smgId) {
  try {
    const { data } = await axios.get(`/api/submachineguns/${smgId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllShotguns() {
  try {
    const { data } = await axios.get("/api/shotguns");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getShotgunById(shotgunId) {
  try {
    const { data } = await axios.get(`/api/shotguns/${shotgunId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllLaunchers() {
  try {
    const { data } = await axios.get("/api/launchers");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getLauncherById(launcherId) {
  try {
    const { data } = await axios.get(`/api/launchers/${launcherId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllLessLethals() {
  try {
    const { data } = await axios.get("/api/lesslethals");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getLessLethalById(lethalId) {
  try {
    const { data } = await axios.get(`/api/lesslethals/${lethalId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllSidearms() {
  try {
    const { data } = await axios.get("/api/sidearms");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getSidearmById(sidearmId) {
  try {
    const { data } = await axios.get(`/api/sidearms/${sidearmId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllAmmoTypes() {
  try {
    const { data } = await axios.get("/api/ammotypes");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAmmoTypeById(ammoId) {
  try {
    const { data } = await axios.get(`/api/ammotypes/${ammoId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllArmor() {
  try {
    const { data } = await axios.get("/api/armor");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getArmorById(armorId) {
  try {
    const { data } = await axios.get(`/api/armor/${armorId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllTacticals() {
  try {
    const { data } = await axios.get("/api/tacticals");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTacticalById(tacticalId) {
  try {
    const { data } = await axios.get(`/api/tacticals/${tacticalId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllGrenades() {
  try {
    const { data } = await axios.get("/api/grenades");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getGrenadeById(grenadeId) {
  try {
    const { data } = await axios.get(`/api/grenades/${grenadeId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllDeployables() {
  try {
    const { data } = await axios.get("/api/deployables");
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDeployableById(deployId) {
  try {
    const { data } = await axios.get(`/api/deployables/${deployId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllHeadwear() {
  try {
    const { data } = await axios.get("/api/headwear");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getHeadwearBydId(headId) {
  try {
    const { data } = await axios.get(`/api/headwear/${headId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllArmorMaterial() {
  try {
    const { data } = await axios.get("/api/armormaterial");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getArmorMaterialById(materialId) {
  try {
    const { data } = await axios.get(`/api/armormaterial/${materialId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

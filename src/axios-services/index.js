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

export async function getAllMissions() {
  try {
    const { data } = await axios.get("/api/missions");

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

export async function getAllSubmachineGuns() {
  try {
    const { data } = await axios.get("/api/submachineguns");

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

export async function getAllLaunchers() {
  try {
    const { data } = await axios.get("/api/launchers");

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

export async function getAllSidearms() {
  try {
    const { data } = await axios.get("/api/sidearms");

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

export async function getAllArmor() {
  try {
    const { data } = await axios.get("/api/armor");

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

export async function getAllGrenades() {
  try {
    const { data } = await axios.get("/api/grenades");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllDeployables() {
  try {
    const { data } = await axios.get("/api/deployables");
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

export async function getAllArmorMaterial() {
  try {
    const { data } = await axios.get("/api/armormaterial");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

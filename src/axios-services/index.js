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

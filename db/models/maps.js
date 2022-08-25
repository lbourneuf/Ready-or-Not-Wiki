// grab our db client connection to use with our adapters
const client = require("../client");

async function createMaps({ name, description, missionsAvailable, imageUrl }) {
  try {
    const {
      rows: [map],
    } = await client.query(
      `
      INSERT INTO maps(name, description, missions_available, image_url)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    
    `,
      [name, description, missionsAvailable, imageUrl]
    );
    return map;
  } catch (error) {
    console.error("Error creating maps");
    throw error;
  }
}

async function getAllMaps() {
  try {
    const { rows } = await client.query(`
      SELECT * 
      FROM maps;
    `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all maps");
    throw error;
  }
}

async function getMaptById(mapId) {
  if (!mapId) {
    return;
  }

  try {
    const {
      rows: [map],
    } = await client.query(
      `
      SELECT *
      FROM maps
      WHERE id=$1
    
    `,
      [mapId]
    );
    return map;
  } catch (error) {
    console.error("Failed to get map by Id");
    throw error;
  }
}

async function getMapByName(name) {
  if (!name) {
    return;
  }

  try {
    const {
      rows: [map],
    } = await client.query(
      `
      SELECT * 
      FROM maps
      WHERE name=$1
    `,
      [name]
    );
    return map;
  } catch (error) {
    console.error("Failed to get map by name");
    throw error;
  }
}

module.exports = {
  // add your database adapter fns here
  createMaps,
  getAllMaps,
  getMaptById,
  getMapByName,
};

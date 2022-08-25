const client = require("../client");

async function createAssaultRifles({
  name,
  description,
  caliber,
  magazineSize,
  imageUrl,
}) {
  try {
    const {
      rows: [rifle],
    } = await client.query(
      `
            INSERT INTO assault_rifles(name, description, caliber, magazine_size, image_url)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `,
      [name, description, caliber, magazineSize, imageUrl]
    );
    return rifle;
  } catch (error) {
    console.error("Error creating Assault Rifles");
    throw error;
  }
}

async function getAllAssaultRifles() {
  try {
    const { rows } = await client.query(`
        SELECT * 
        FROM assault_rifles;
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all rifles");
    throw error;
  }
}

async function getAssaultRifleById(id) {
  if (!id) {
    return;
  }

  try {
    const {
      rows: [rifle],
    } = await client.query(
      `
            SELECT * 
            FROM assault_rifles
            WHERE id=$1
        `,
      [id]
    );
    return rifle;
  } catch (error) {
    console.error("Failed to get rifle by id");
    throw error;
  }
}

module.exports = {
  createAssaultRifles,
  getAssaultRifleById,
  getAllAssaultRifles,
};

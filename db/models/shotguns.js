const client = require("../client");

async function createShotguns({
  name,
  description,
  caliber,
  magazineSize,
  imageUrl,
}) {
  try {
    const {
      rows: [shotgun],
    } = await client.query(
      `
        INSERT INTO shotguns(name, description, caliber, magazine_size, image_url)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
     `,
      [name, description, caliber, magazineSize, imageUrl]
    );
    return shotgun;
  } catch (error) {
    console.error("Error creating shotguns");
    throw error;
  }
}

async function getAllShotguns() {
  try {
    const { rows } = await client.query(`
            SELECT *
            FROM shotguns;
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all shotguns");
    throw error;
  }
}

async function getShotgunById(id) {
  if (!id) {
    return;
  }
  try {
    const {
      rows: [shotgun],
    } = await client.query(
      `
            SELECT * 
            FROM shotguns
            WHERE id=$1
        `,
      [id]
    );
    return shotgun;
  } catch (error) {
    console.error("Failed to get shotgun by id");
    throw error;
  }
}

module.exports = {
  createShotguns,
  getAllShotguns,
  getShotgunById,
};

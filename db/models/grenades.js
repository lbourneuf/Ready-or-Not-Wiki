const client = require("../client");

async function createGrenades({ name, description, imageUrl }) {
  try {
    const {
      rows: [grenade],
    } = await client.query(
      `
            INSERT INTO grenades(name, description, image_url)
            VALUES($1, $2, $3)
            RETURNING *;
        `,
      [name, description, imageUrl]
    );
    return grenade;
  } catch (error) {
    console.error("Error creating grenades");
    throw error;
  }
}
async function getAllGrenades() {
  try {
    const { rows } = await client.query(`
            SELECT *
            FROM grenades;
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all grenades");
    throw error;
  }
}

async function getGrenadeById(id) {
  if (!id) {
    return;
  }

  try {
    const {
      rows: [grenade],
    } = await client.query(
      `
            SELECT * 
            FROM grenades
            WHERE id=$1
        `,
      [id]
    );
    return grenade;
  } catch (error) {
    console.error("Failed to get grenade by id");
    throw error;
  }
}

module.exports = {
  createGrenades,
  getAllGrenades,
  getGrenadeById,
};

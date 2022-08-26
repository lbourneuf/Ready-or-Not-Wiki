const client = require("../client");

async function createAmmoTypes({ name, description, imageUrl }) {
  try {
    const {
      rows: [ammo],
    } = await client.query(
      `
            INSERT INTO ammo_types(name, description, image_url)
            VALUES($1, $2, $3)
            RETURNING *;
        `,
      [name, description, imageUrl]
    );
    return ammo;
  } catch (error) {
    console.error("Error creating ammo types");
    throw error;
  }
}

async function getAllAmmoTypes() {
  try {
    const { rows } = await client.query(`
            SELECT * 
            FROM ammo_types;
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all ammo types");
    throw error;
  }
}

async function getAmmoTypeById(id) {
  try {
    const {
      rows: [ammo],
    } = await client.query(
      `
            SELECT * 
            FROM ammo_types
            WHERE id=$1
        `,
      [id]
    );
    return ammo;
  } catch (error) {
    console.error("Error getting ammo type by id");
    throw error;
  }
}

module.exports = {
  createAmmoTypes,
  getAllAmmoTypes,
  getAmmoTypeById,
};

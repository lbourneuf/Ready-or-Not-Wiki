const client = require("../client");

async function createArmorMaterial({ name, description, imageUrl }) {
  try {
    const {
      rows: [mat],
    } = await client.query(
      `
            INSERT INTO armor_material(name, description, image_url)
            VALUES($1, $2, $3)
            RETURNING *;
        `,
      [name, description, imageUrl]
    );
    return mat;
  } catch (error) {
    console.error("Error creating armor material");
    throw error;
  }
}

async function getAllArmorMaterial() {
  try {
    const { rows } = await client.query(`
            SELECT *
            FROM armor_material;
        
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all armor material");
    throw error;
  }
}

async function getArmorMaterialById(id) {
  if (!id) {
    return;
  }

  try {
    const {
      rows: [mat],
    } = await client.query(
      `
            SELECT *
            FROM armor_material
            WHERE id=$1
        `,
      [id]
    );
    return mat;
  } catch (error) {
    console.error("Failed to get armor material by id");
    throw error;
  }
}

module.exports = {
  createArmorMaterial,
  getAllArmorMaterial,
  getArmorMaterialById,
};

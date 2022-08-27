const client = require("../client");

async function createArmor({ name, description, imageUrl }) {
  try {
    const {
      rows: [armor],
    } = await client.query(
      `
            INSERT INTO armor(name, description, image_url)
            VALUES($1, $2, $3)
            RETURNING *;
        `,
      [name, description, imageUrl]
    );
    return armor;
  } catch (error) {
    console.error("Error creating armor");
    throw error;
  }
}

async function getAllArmor() {
  try {
    const { rows } = await client.query(`
            SELECT * 
            FROM armor;
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all armor");
    throw error;
  }
}

async function getArmorById(id) {
  if (!id) {
    return;
  }
  try {
    const {
      rows: [armor],
    } = await client.query(
      `
            SELECT * 
            FROM armor
            WHERE id=$1
        
        `,
      [id]
    );
    return armor;
  } catch (error) {
    console.error("Failed to get armor by id");
    throw error;
  }
}

module.exports = {
  createArmor,
  getAllArmor,
  getArmorById,
};

const client = require("../client");

async function createSubmachineGuns({
  name,
  description,
  caliber,
  magazineSize,
  imageUrl,
}) {
  try {
    const {
      rows: [gun],
    } = await client.query(
      `
            INSERT INTO submachine_guns(name, description, caliber, magazine_size, image_url)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `,
      [name, description, caliber, magazineSize, imageUrl]
    );
    return gun;
  } catch (error) {
    console.error("Error creating submachine guns");
    throw error;
  }
}

async function getAllSubmachineGuns() {
  try {
    const { rows } = await client.query(`
        SELECT * 
        FROM submachine_guns;
    `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all submachine guns");
    throw error;
  }
}

async function getSubmachineGunById(id) {
  try {
    const {
      rows: [gun],
    } = await client.query(
      `
            SELECT * 
            FROM submachine_guns
            WHERE id=$1
        `,
      [id]
    );
    return gun;
  } catch (error) {
    console.error("Trouble getting submachine gun by id");
    throw error;
  }
}

module.exports = {
  createSubmachineGuns,
  getAllSubmachineGuns,
  getSubmachineGunById,
};

const client = require("../client");

async function createSidearms({
  name,
  description,
  caliber,
  magazineSize,
  imageUrl,
}) {
  try {
    const {
      rows: [sidearm],
    } = await client.query(
      `
            INSERT INTO sidearms(name, description, caliber, magazine_size, image_url)
            VALUES($1, $2, $3, $4, $5)
            RETURNING *;
        `,
      [name, description, caliber, magazineSize, imageUrl]
    );
    return sidearm;
  } catch (error) {
    console.error("Error creating sidearms");
    throw error;
  }
}

async function getAllSidearms() {
  try {
    const { rows } = await client.query(`
            SELECT *
            FROM sidearms;
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all sidearms");
    throw error;
  }
}

async function getSidearmById(id) {
  try {
    const {
      rows: [sidearm],
    } = await client.query(
      `
            SELECT *
            FROM sidearms
            WHERE id=$1;
        `,
      [id]
    );

    return sidearm;
  } catch (error) {
    console.error("Error getting sidearm by id");
    throw error;
  }
}

module.exports = {
  createSidearms,
  getAllSidearms,
  getSidearmById,
};

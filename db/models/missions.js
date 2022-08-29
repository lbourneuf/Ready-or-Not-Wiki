const client = require("../client");

async function createMissions({ name, description, imageUrl }) {
  try {
    const {
      rows: [mission],
    } = await client.query(
      `
            INSERT INTO missions(name, description, image_url)
            VALUES ($1, $2, $3)
            RETURNING *;
        `,
      [name, description, imageUrl]
    );
    return mission;
  } catch (error) {
    console.error("Error creating missions");
    throw error;
  }
}

async function getAllMissions() {
  try {
    const { rows } = await client.query(`
            SELECT * FROM missions;
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all missions");
    throw error;
  }
}

async function getMissionById(id) {
  if (!id) {
    return;
  }

  try {
    const {
      rows: [mission],
    } = await client.query(
      `
      SELECT *
      FROM missions
      WHERE id=$1
    `,
      [id]
    );
    return mission;
  } catch (error) {
    console.error("Failed to get mission by id");
    throw error;
  }
}

module.exports = {
  createMissions,
  getAllMissions,
  getMissionById,
};

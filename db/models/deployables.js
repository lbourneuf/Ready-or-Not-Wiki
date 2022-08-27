const client = require("../client");

async function createDeployables({ name, description, imageUrl }) {
  try {
    const {
      rows: [deploy],
    } = await client.query(
      `
            INSERT INTO deployables(name, description, image_url)
            VALUES($1, $2, $3)
            RETURNING *;
        `,
      [name, description, imageUrl]
    );
    return deploy;
  } catch (error) {
    console.error("Error creating deployables");
    throw error;
  }
}

async function getAllDeployables() {
  try {
    const { rows } = await client.query(`
            SELECT * 
            FROM deployables;
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all deployables");
    throw error;
  }
}

async function getDeployableById(id) {
  if (!id) {
    return;
  }
  try {
    const {
      rows: [deploy],
    } = await client.query(
      `
            SELECT *
            FROM deployables
            WHERE id=$1
        `,
      [id]
    );
    return deploy;
  } catch (error) {
    console.error("Failed to get deployable by id");
    throw error;
  }
}

module.exports = {
  createDeployables,
  getAllDeployables,
  getDeployableById,
};

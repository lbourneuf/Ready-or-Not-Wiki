const client = require("../client");

async function createTacticals({ name, description, imageUrl }) {
  try {
    const {
      rows: [tactical],
    } = await client.query(
      `
            INSERT INTO tacticals(name, description, image_url)
            VALUES($1, $2, $3)
            RETURNING *;
        `,
      [name, description, imageUrl]
    );
    return tactical;
  } catch (error) {
    console.error("Error creating tacticals");
    throw error;
  }
}

async function getAllTacticals() {
  try {
    const { rows } = await client.query(`
            SELECT * 
            FROM tacticals;
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all tacticals");
    throw error;
  }
}

async function getTacticalById(id) {
  if (!id) {
    return;
  }

  try {
    const {
      rows: [tactical],
    } = await client.query(
      `
            SELECT * 
            FROM tacticals
            WHERE id=$1
        `,
      [id]
    );
    return tactical;
  } catch (error) {
    console.error("Failed to get tactical by id");
    throw error;
  }
}

module.exports = {
  createTacticals,
  getAllTacticals,
  getTacticalById,
};

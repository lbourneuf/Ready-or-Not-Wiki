const client = require("../client");

async function createLaunchers({ name, description, imageUrl }) {
  try {
    const {
      rows: [launcher],
    } = await client.query(
      `
        INSERT INTO launchers(name, description, image_url)
        VALUES ($1, $2, $3)
        RETURNING *;
    `,
      [name, description, imageUrl]
    );
    return launcher;
  } catch (error) {
    console.error("Error creating launchers");
    throw error;
  }
}

async function getAllLaunchers() {
  try {
    const { rows } = await client.query(`
            SELECT *
            FROM launchers;
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all launchers");
    throw error;
  }
}

module.exports = {
  createLaunchers,
  getAllLaunchers,
};

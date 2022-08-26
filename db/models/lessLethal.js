const client = require("../client");

async function createLessLethal({ name, description, imageUrl }) {
  try {
    const {
      rows: [lethal],
    } = await client.query(
      `
            INSERT INTO less_lethal(name, description, image_url)
            VALUES($1, $2,$3)
            RETURNING *;
        `,
      [name, description, imageUrl]
    );
    return lethal;
  } catch (error) {
    console.error("Error creating initial less lethal");
    throw error;
  }
}

async function getAllLessLethals() {
  try {
    const { rows } = await client.query(`
            SELECT * 
            FROM less_lethal;
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all less lesthals");
    throw error;
  }
}

async function getLessLethalById(id) {
  if (!id) {
    return;
  }

  try {
    const {
      rows: [lethal],
    } = await client.query(
      `
            SELECT * 
            FROM less_lethal
            WHERE id=$1
        `,
      [id]
    );
    return lethal;
  } catch (error) {
    console.error("Error getting less lethal by id");
    throw error;
  }
}

module.exports = {
  createLessLethal,
  getAllLessLethals,
  getLessLethalById,
};

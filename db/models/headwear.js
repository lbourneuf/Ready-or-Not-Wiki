const client = require("../client");

async function createHeadwear({ name, description, imageUrl }) {
  try {
    const {
      rows: [head],
    } = await client.query(
      `
            INSERT INTO headwear(name, description, image_url)
            VALUES($1, $2, $3)
            RETURNING *;
        `,
      [name, description, imageUrl]
    );
    return head;
  } catch (error) {
    console.error("Error creating headwear");
    throw error;
  }
}

async function getAllHeadwear() {
  try {
    const { rows } = await client.query(`
            SELECT *
            FROM headwear;
        
        `);
    return rows;
  } catch (error) {
    console.error("Trouble getting all headwear");
    throw error;
  }
}

async function getHeadwearById(id) {
  if (!id) {
    return;
  }

  try {
    const {
      rows: [head],
    } = await client.query(
      `
        SELECT * 
        FROM headwear
        WHERE id=$1
    `,
      [id]
    );
    return head;
  } catch (error) {
    console.error("Failed to get headwear by id");
    throw error;
  }
}

module.exports = {
  createHeadwear,
  getAllHeadwear,
  getHeadwearById,
};

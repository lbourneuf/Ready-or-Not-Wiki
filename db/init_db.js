const {
  client,
  // declare your model imports here
  // for example, User
  createMaps,
  getAllMaps,
} = require("./");

async function dropTables() {
  try {
    console.log("Starting to drop tables");
    await client.query(`
      DROP TABLE IF EXISTS maps;
      DROP TABLE IF EXISTS missions;
    `);
    console.log("Finished dropping tables");
  } catch (error) {
    console.error("Error dropping tables");
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Starting to create tables");
    await client.query(`
      CREATE TABLE maps (
        id SERIAL PRIMARY KEY,
        name varchar(255),
        description varchar,
        missions_available varchar,
        image_url varchar(255)
      );
    
        CREATE TABLE missions (
          id SERIAL PRIMARY KEY,
          name varchar(255),
          description varchar,
          image_url varchar(255)
        );
    
    `);

    console.log("Finished creating tables");
  } catch (error) {
    console.error("Error creating tables");
    throw error;
  }
}

async function createInitialMaps() {
  try {
    console.log("Creating new maps...");
    const map1 = await createMaps({
      name: "Caesars Cars Dealership",
      description:
        "With the impetus to now crack down on mobsters operating in Los Suenos, LSPD raids a suspected trafficking exchange point in North Hills. Exercise extreme caution.",
      missionsAvailable: "Bomb Threat, Barricaded Suspects",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/1/1a/Caesar%27s_Cars_Dealership_location.png/revision/latest?cb=20220315193453",
    });

    const map2 = await createMaps({
      name: "Cherryessa Farm",
      description:
        "An officer has been killed in the line of duty. He lays dead on the driveway of Cherryessa Farm. Your team is to deploy and clear the strange compound.",
      missionsAvailable: "Barricaded Suspects, Raid",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/2/2e/Cherryessa_Farm_location.png/revision/latest?cb=20220315193533",
    });

    const map3 = await createMaps({
      name: "4U Gas Station",
      description:
        "Seizing a moment of opportunity, a posse of delinquent meth-head kids execute their plane in order to support a crippling addiction.",
      missionsAvailable:
        "Barricaded Suspects, Raid, Active Shooter, Bomb Threat, Hostage Rescue",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/c/ca/4U_Gas_Station_location.png/revision/latest?cb=20220315193203",
    });

    const map4 = await createMaps({
      name: "213 Park Homes",
      description:
        "The detectives have been following a new lead to locate a key source of methamphetamine storage in Los Suenos, tracing a potential 'affordable housing' development in 213 Park.",
      missionsAvailable: "Barricaded Suspects, Raid",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/2/21/213_Park_Homes_location.png/revision/latest?cb=20220315193413",
    });
    console.log("Finished creating initial maps...");
  } catch (error) {
    console.error("Error creating initial maps");
    throw error;
  }
}

async function buildTables() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialMaps();
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());

async function testDB() {
  try {
    console.log("Starting to test database");
    const maps = await getAllMaps();
    console.log("This is all maps: ", maps);
  } catch (error) {
    console.error("Error testing database");
    throw error;
  }
}

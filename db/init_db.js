const {
  client,
  // declare your model imports here
  // for example, User
  createMaps,
  getAllMaps,
  createMissions,
  getAllMissions,
  getMaptById,
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

    const map5 = await createMaps({
      name: "Neon Nightclub",
      description:
        "US airstrikes have targeted villages housing a notorious terrorist group in Northern Yemen, which has ties to the US cells. One such cell is known as The Hand, who have enacted a domestic response to the military incurison.",
      missionsAvailable: "Barricaded Suspects",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/f/ff/Club_Entrance.png/revision/latest?cb=20220621163818",
    });

    const map6 = await createMaps({
      name: "Brisa Cove",
      description:
        "A group calling themselves the 'Left Behind' are taking matters into their own hands by attempting to kill a politician responsible for a budget cut proposal to the already under-supported VAMC in Los Suenos",
      missionsAvailable: "Barricaded Suspects",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/a/a5/Livelaughlove.png/revision/latest?cb=20220620233742",
    });

    const map7 = await createMaps({
      name: "Port Hokan",
      description:
        "Joint strike operation between metro SWAT, FBI HRT and ATF. Rainy Weather. Your platoon has been tasked with clearing Warehouse One and the Void Shipping Services facility.",
      missionsAvailable:
        "Barricaded Suspects, Raid, Bomb Threat, Hostage Rescue",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/e/eb/Port_Hoken_location.png/revision/latest?cb=20220315193550",
    });

    const map8 = await createMaps({
      name: "Wenderly Hills Hotel",
      description:
        "D Platoon are to deploy on-site and clear the key floor of this hotel. Multiple civilians inside. Very dangerous, deceptive suspect. Be on your a-game.",
      missionsAvailable:
        "Barricaded Suspects, Raid, Bomb Threat, Hostage Rescue",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/c/cb/Wenderly_Hills_Hotel_location.png/revision/latest?cb=20220315193626",
    });

    const map9 = await createMaps({
      name: "Voll Health House",
      description:
        "Having taken down a distribution center for an illegal child-pornography ring operating out of Los Suenos, the LSPD cyber-crime team has now located the man profiting from its sales. LSPD SWAT have been sent to his home on a warrant service.",
      missionsAvailable: "Barricaded Suspects",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/7/7b/Valley_Party.jpg/revision/latest?cb=20220621191550",
    });
    console.log("Finished creating initial maps...");
  } catch (error) {
    console.error("Error creating initial maps");
    throw error;
  }
}

async function createInitialMissions() {
  try {
    const mission1 = await createMissions({
      name: "Barricaded Suspects",
      description:
        "Your team's number one priority is rescuing civilians, and detaining suspects. Rules of engagement are strict. Don't kill unless an officer or civilian is threatened",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/b/b5/Barricaded_Suspects.png/revision/latest?cb=20220315133612",
    });

    const mission2 = await createMissions({
      name: "Raid",
      description:
        "The suspects are highly dangerous. They will not be so easy to give up, and your ROE has been loosened as a result. Prepare for long engagements and a lot of firefights. Practice well beforehand.",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/d/d6/Raid.png/revision/latest?cb=20220315133707",
    });

    const mission3 = await createMissions({
      name: "Active Shooter",
      description:
        "A gunman roams the halls, hunting down civilians and killing them in an insane frenzy. Take this threat out before too many innocent lives are lost.",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/0/0c/Active_Shooter.png/revision/latest?cb=20220315133555",
    });

    const mission4 = await createMissions({
      name: "Bomb Threat",
      description:
        "A bomb threat has been called in. Highest priority is disabling the explosives before the time runs out. Second highest priority is rescuing all of the civilians and taking out the suspects. Good luck, you'll need it.",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/f/f3/Bomb_Threat.png/revision/latest?cb=20220315133634",
    });

    const mission5 = await createMissions({
      name: "Hostage Rescue",
      description:
        "Suspects have taken a room of civilians hostage. It's up to you to locate them quietly, establish a strategy, and execute quickly. The lives of innocent people depend on you.",
      imageUrl:
        "https://static.wikia.nocookie.net/ready-or-not/images/e/e7/Hostage_Rescue.png/revision/latest?cb=20220315133651",
    });
  } catch (error) {
    console.error("Error creating initial missions");
    throw error;
  }
}

async function buildTables() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialMaps();
    await createInitialMissions();
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
    // console.log("Starting to test database");
    // console.log("Calling getAllMaps");
    // const maps = await getAllMaps();
    // console.log("This is all maps: ", maps);

    console.log("Calling getMapById");
    const map1 = await getMaptById(1);
    console.log("Get map by Id result: ", map1);

    // console.log("Calling getAllMissions");
    // const missions = await getAllMissions();
    // console.log("This is all missions", missions);
  } catch (error) {
    console.error("Error testing database");
    throw error;
  }
}

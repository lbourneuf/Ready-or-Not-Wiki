const {
  client,
  // declare your model imports here
  // for example, User
  createMaps,
  getAllMaps,
  createMissions,
  getAllMissions,
  getMaptById,
  getMapByName,
  createAssaultRifles,
  getAssaultRifleById,
  getAllAssaultRifles,
  createSubmachineGuns,
  getAllSubmachineGuns,
  getSubmachineGunById,
} = require("./");

async function dropTables() {
  try {
    console.log("Starting to drop tables");
    await client.query(`
      DROP TABLE IF EXISTS maps;
      DROP TABLE IF EXISTS missions;
      DROP TABLE IF EXISTS assault_rifles;
      DROP TABLE IF EXISTS submachine_guns;
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
        name varchar(255) NOT NULL,
        description varchar NOT NULL,
        missions_available varchar NOT NULL,
        image_url varchar(255) NOT NULL
      );
    
        CREATE TABLE missions (
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          image_url varchar(255) NOT NULL
        );

        CREATE TABLE assault_rifles (
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULl,
          caliber varchar(255) NOT NULL,
          magazine_size INTEGER NOT NULL,
          image_url varchar(255) NOT NULL
        );

        CREATE TABLE submachine_guns (
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          caliber varchar(255) NOT NULL,
          magazine_size INTEGER NOT NULL,
          image_url varchar(255) NOT NULL
        )
    
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
      imageUrl: "https://i.gyazo.com/523a5067aac57a05630f5a9c52a1d848.png",
    });

    const map2 = await createMaps({
      name: "Cherryessa Farm",
      description:
        "An officer has been killed in the line of duty. He lays dead on the driveway of Cherryessa Farm. Your team is to deploy and clear the strange compound.",
      missionsAvailable: "Barricaded Suspects, Raid",
      imageUrl: "https://i.gyazo.com/cc200382a0757227d407d9db06f830b1.png",
    });

    const map3 = await createMaps({
      name: "4U Gas Station",
      description:
        "Seizing a moment of opportunity, a posse of delinquent meth-head kids execute their plane in order to support a crippling addiction.",
      missionsAvailable:
        "Barricaded Suspects, Raid, Active Shooter, Bomb Threat, Hostage Rescue",
      imageUrl: "https://i.gyazo.com/d6663dfb2475e85c8591c44f9c61795b.png",
    });

    const map4 = await createMaps({
      name: "213 Park Homes",
      description:
        "The detectives have been following a new lead to locate a key source of methamphetamine storage in Los Suenos, tracing a potential 'affordable housing' development in 213 Park.",
      missionsAvailable: "Barricaded Suspects, Raid",
      imageUrl: "https://i.gyazo.com/9437fe629fec7ea466dc87b421bdbbdb.png",
    });

    const map5 = await createMaps({
      name: "Neon Nightclub",
      description:
        "US airstrikes have targeted villages housing a notorious terrorist group in Northern Yemen, which has ties to the US cells. One such cell is known as The Hand, who have enacted a domestic response to the military incurison.",
      missionsAvailable: "Barricaded Suspects",
      imageUrl: "https://i.gyazo.com/a3ab63962eaf2301df2f572f82855745.jpg",
    });

    const map6 = await createMaps({
      name: "Brisa Cove",
      description:
        "A group calling themselves the 'Left Behind' are taking matters into their own hands by attempting to kill a politician responsible for a budget cut proposal to the already under-supported VAMC in Los Suenos",
      missionsAvailable: "Barricaded Suspects",
      imageUrl: "https://i.gyazo.com/012f17d299dec59bf2a3cb6dd5e93c61.png",
    });

    const map7 = await createMaps({
      name: "Port Hokan",
      description:
        "Joint strike operation between metro SWAT, FBI HRT and ATF. Rainy Weather. Your platoon has been tasked with clearing Warehouse One and the Void Shipping Services facility.",
      missionsAvailable:
        "Barricaded Suspects, Raid, Bomb Threat, Hostage Rescue",
      imageUrl: "https://i.gyazo.com/c186b94086060e227bb46b454586bd43.png",
    });

    const map8 = await createMaps({
      name: "Wenderly Hills Hotel",
      description:
        "D Platoon are to deploy on-site and clear the key floor of this hotel. Multiple civilians inside. Very dangerous, deceptive suspect. Be on your a-game.",
      missionsAvailable:
        "Barricaded Suspects, Raid, Bomb Threat, Hostage Rescue",
      imageUrl: "https://i.gyazo.com/2cf5517c5a1df02f11c54f28ab51a7ce.png",
    });

    const map9 = await createMaps({
      name: "Voll Health House",
      description:
        "Having taken down a distribution center for an illegal child-pornography ring operating out of Los Suenos, the LSPD cyber-crime team has now located the man profiting from its sales. LSPD SWAT have been sent to his home on a warrant service.",
      missionsAvailable: "Barricaded Suspects",
      imageUrl: "https://i.gyazo.com/ea94d6160cbc4b2e783e647be657ed5b.jpg",
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
      imageUrl: "https://i.gyazo.com/61a0b8795636b741ed6fec4d97292bc9.png",
    });

    const mission2 = await createMissions({
      name: "Raid",
      description:
        "The suspects are highly dangerous. They will not be so easy to give up, and your ROE has been loosened as a result. Prepare for long engagements and a lot of firefights. Practice well beforehand.",
      imageUrl: "https://i.gyazo.com/74bca9ded725c95d0eb672665d6b5dad.png",
    });

    const mission3 = await createMissions({
      name: "Active Shooter",
      description:
        "A gunman roams the halls, hunting down civilians and killing them in an insane frenzy. Take this threat out before too many innocent lives are lost.",
      imageUrl: "https://i.gyazo.com/29ef9163c88c51237ff1e066e037cfe0.png",
    });

    const mission4 = await createMissions({
      name: "Bomb Threat",
      description:
        "A bomb threat has been called in. Highest priority is disabling the explosives before the time runs out. Second highest priority is rescuing all of the civilians and taking out the suspects. Good luck, you'll need it.",
      imageUrl: "https://i.gyazo.com/ba58edb8c83c495ae1afdf33989c8f83.png",
    });

    const mission5 = await createMissions({
      name: "Hostage Rescue",
      description:
        "Suspects have taken a room of civilians hostage. It's up to you to locate them quietly, establish a strategy, and execute quickly. The lives of innocent people depend on you.",
      imageUrl: "https://i.gyazo.com/05480fb58172d9b0b1e7fcf8ac48e00f.png",
    });
  } catch (error) {
    console.error("Error creating initial missions");
    throw error;
  }
}

async function createInitialAssaultRifles() {
  try {
    const rifle1 = await createAssaultRifles({
      name: "ARN-18",
      description:
        "A short and compact assault rifle, suitable for CQB operations.",
      caliber: ".300 Blackout",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/6b1f864537136cde2bdbddfc08c721b4.jpg",
    });
    const rifle2 = await createAssaultRifles({
      name: "G36C",
      description:
        "Chambered in 5.56 and boasting a rigid, polymer design, folding stock and short barrel, ensuring maximum maneuverability in close-quarters battle.",
      caliber: "5.56x45mm",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/16f7cc01f988549df5929f0760e4eb32.jpg",
    });

    const rifle3 = await createAssaultRifles({
      name: "M4A1",
      description:
        "A homegrown American icon commonly found in SWAT teams nationwide, the M4A1 eschews raw firepower in favor of top handling, low recoil, and familiarity.",
      caliber: "5.56x45mm",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/3efa759d96cdee070e35c89eea2f2fb5.jpg",
    });
    const rifle4 = await createAssaultRifles({
      name: "MK16",
      description:
        "Developed to become the workhorse of special forces units, it's now a popular choice for both the civilian market and law enforcement use.",
      caliber: "5.56x45mm",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/52b1bf157270205d1f8736a262d1bdfe.jpg",
    });

    const rifle5 = await createAssaultRifles({
      name: "ARWC",
      description:
        "A short and compact assault rifle, suitable for CQB operations.",
      caliber: "5.56x45mm",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/7d6be5f3923da04f3de974d9cbfe90d3.jpg",
    });

    const rifle6 = await createAssaultRifles({
      name: "GA416",
      description:
        "Modern German assault rifle that has rapidly found favor from operators worldwide, including the US Navy's SEAL Team Six. Known for reliability and operational durability.",
      caliber: "5.56x45mm",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/952c9648293bfee8fc1996cd51e6e1c6.jpg",
    });

    const rifle7 = await createAssaultRifles({
      name: "SA-58",
      description:
        "A sturdy and proven battle rifle chambered in 7.62x51mm and modified for close quarter operations. Powerful penetration requires careful shot placement to avoid collateral damage.",
      caliber: "7.62x51mm",
      magazineSize: 20,
      imageUrl: "https://i.gyazo.com/5aef5881172da72ffca3ceb30f492cbf.jpg",
    });

    const rifle8 = await createAssaultRifles({
      name: "SLR47",
      description:
        "While an unconventional choice for most police departments, AK-base platforms have found niche use due to its very accessible and reliable controls, ideal for non-permissive environments that some police units may face.",
      caliber: "7.62x51mm",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/5e6abd87bf95ab0cbd8eb325a1a05e61.jpg",
    });

    const rifle9 = await createAssaultRifles({
      name: "SR-16",
      description:
        "This light-weight carbine features a full length quad rail system and impressive muzzle velocity, encouraging customization and boasting precision and accuracy.",
      caliber: "5.56x45mm",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/4b896c2f6424ffd107266826ba780ff8.jpg",
    });
  } catch (error) {
    console.error("Error creating initial assault rifles");
    throw error;
  }
}

async function createInitialSubmachineGuns() {
  try {
    const sub1 = await createSubmachineGuns({
      name: "MP5/10MM",
      description:
        "A variation of the MP5 that was made to meet the FBI's needs in the late 80s, the 10mm cartridge packs a heavy punch, and found use with HRT and SWAT units before short-barreled 5.56 carbines became popular.",
      caliber: "10x25mm",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/f9bd4188d67441e2e2b1c6e99779f8ef.jpg",
    });
  } catch (error) {
    console.error("Error creating initial submachine guns");
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
    await createInitialAssaultRifles();
    await createInitialSubmachineGuns();
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
    console.log("Calling getAllMaps");
    const maps = await getAllMaps();
    console.log("This is all maps: ", maps);

    console.log("Calling getMapById");
    const map1 = await getMaptById(1);
    console.log("Get map by Id result: ", map1);

    console.log("Calling getMapByName");
    const neon = await getMapByName("Neon Nightclub");
    console.log("Get map by name result: ", neon);

    console.log("Calling getAllMissions");
    const missions = await getAllMissions();
    console.log("This is all missions", missions);

    console.log("Calling getAllAssaultRifles");
    const rifles = await getAllAssaultRifles();
    console.log("This is all rifles", rifles);

    console.log("Calling getAssaultRifleById");
    const rifle1 = await getAssaultRifleById(4);
    console.log("Get assault rifle by id result: ", rifle1);

    console.log("Calling getAllSubmachineGuns");
    const guns = await getAllSubmachineGuns();
    console.log("Get all submachine guns result: ", guns);

    console.log("Calling getSubmachineGunById");
    const gun1 = await getSubmachineGunById(1);
    console.log("Get submachine gun by id result: ", gun1);
  } catch (error) {
    console.error("Error testing database");
    throw error;
  }
}

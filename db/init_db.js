const {
  client,
  // declare your model imports here
  // for example, User
  createMaps,
  getAllMaps,
  createMissions,
  getAllMissions,
  getMissionById,
  getMapById,
  getMapByName,
  createAssaultRifles,
  getAssaultRifleById,
  getAllAssaultRifles,
  createSubmachineGuns,
  getAllSubmachineGuns,
  getSubmachineGunById,
  createShotguns,
  getAllShotguns,
  getShotgunById,
  createLaunchers,
  getAllLaunchers,
  getLauncherById,
  createLessLethal,
  getAllLessLethals,
  getLessLethalById,
  createSidearms,
  getAllSidearms,
  getSidearmById,
  createAmmoTypes,
  getAllAmmoTypes,
  getAmmoTypeById,
  createArmor,
  getAllArmor,
  getArmorById,
  createTacticals,
  getAllTacticals,
  getTacticalById,
  createGrenades,
  getAllGrenades,
  getGrenadeById,
  createDeployables,
  getAllDeployables,
  getDeployableById,
  createHeadwear,
  getAllHeadwear,
  getHeadwearById,
  createArmorMaterial,
  getAllArmorMaterial,
  getArmorMaterialById,
} = require("./");

async function dropTables() {
  try {
    console.log("Starting to drop tables");
    await client.query(`
      DROP TABLE IF EXISTS maps;
      DROP TABLE IF EXISTS missions;
      DROP TABLE IF EXISTS assault_rifles;
      DROP TABLE IF EXISTS submachine_guns;
      DROP TABLE IF EXISTS shotguns;
      DROP TABLE IF EXISTS launchers;
      DROP TABLE IF EXISTS less_lethal;
      DROP TABLE IF EXISTS sidearms;
      DROP TABLE IF EXISTS ammo_types;
      DROP TABLE IF EXISTS armor;
      DROP TABLE IF EXISTS tacticals;
      DROP TABLE IF EXISTS grenades;
      DROP TABLE IF EXISTS deployables;
      DROP TABLE IF EXISTS headwear;
      DROP TABLE IF EXISTS armor_material;
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
        );

        CREATE TABLE shotguns (
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          caliber varchar(255) NOT NULL,
          magazine_size INTEGER NOT NULL,
          image_url varchar(255) NOT NULL
        );

        CREATE TABLE launchers (
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          image_url varchar(255) NOT NULL
        );

        CREATE TABLE less_lethal (
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          image_url varchar(255) NOT NULL
        );

        CREATE TABLE sidearms (
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          caliber varchar(255) NOT NULL,
          magazine_size INTEGER NOT NULL,
          image_url varchar(255) NOT NULL

        );

        CREATE TABLE ammo_types (
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          image_url varchar(255) NOT NULL
        );

        CREATE TABLE armor (
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          image_url varchar(255) NOT NULL
        );

        CREATE TABLE tacticals (
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          image_url varchar(255) NOT NULL
        );

        CREATE TABLE grenades(
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          image_url varchar(255) NOT NULL
        );

        CREATE TABLE deployables(
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          image_url varchar(255) NOT NULL
        );

        CREATE TABLE headwear(
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          image_url varchar(255) NOT NULL
        );

        CREATE TABLE armor_material(
          id SERIAL PRIMARY KEY,
          name varchar(255) NOT NULL,
          description varchar NOT NULL,
          image_url varchar(255) NOT NULL
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
    const sub2 = await createSubmachineGuns({
      name: "MP5A2",
      description:
        "This iconic submachine gun set the standard for law enforcement for half a century. Although modern platforms have since overtaken it, you'll be hard pressed to find a more reliable, controllable, and ubiquitous companion.",
      caliber: "9x19mm",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/7f37f3ecdf0c3501a7fc25b4e76ad063.jpg",
    });

    const sub3 = await createSubmachineGuns({
      name: "MPX",
      description:
        "This modern pistol caliber carbine combines the best aspects of a submachine gun with the controls of the AR platform, maximizing familiarity and comfort. Low recoil and fast to reload.",
      caliber: "9x19mm",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/7cb5b3c7792f9a3333a2e0b52370fd47.jpg",
    });

    const sub4 = await createSubmachineGuns({
      name: "MP5A3",
      description:
        "A modernized version of the MP5, with an improvement kit that extends its usability within the requirements of weapons systems in this current decade.",
      caliber: "9x19mm",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/9800285c34b0f0cc6c07a8373825fc62.jpg",
    });

    const sub5 = await createSubmachineGuns({
      name: "MP9",
      description:
        "An Austrian design, upgraded for modern use. Compact, lightweight, and high rate of fire makes it suitable for close range engagements.",
      caliber: "9x19mm",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/cfe84e0646804b9ca83386feaeaaeafe.jpg",
    });

    const sub6 = await createSubmachineGuns({
      name: "UMP-45",
      description:
        "Intended as a sucessor to the dated MP5, this slow firing submachine gun chambered in .45 ACP boasts stopping power and excellent ergonomics. Its stock can be folded for a more compact package. ",
      caliber: ".45 ACP",
      magazineSize: 30,
      imageUrl: "https://i.gyazo.com/9e3c6cee01476676b916a8d10b8f3813.jpg",
    });
  } catch (error) {
    console.error("Error creating initial submachine guns");
    throw error;
  }
}

async function createInitialShotguns() {
  try {
    const shotgun1 = await createShotguns({
      name: "870 CQB",
      description:
        "Iconic pump action shotgun found in police cruisers across the world. This workhorse features a rail for optics and an integrated flashlight. It may be slow firing, but it will never let you down in the field. Fires 12 Gauge Buckshot or Slug shells from a 8-round internal magazine.",
      caliber: "12g Buckshot/Slug",
      magazineSize: 8,
      imageUrl: "https://i.gyazo.com/75de6ecd9b4084dd7b7b7e04a6240daa.jpg",
    });

    const shotgun2 = await createShotguns({
      name: "B1301",
      description:
        "A sturdy tactical shotgun hailing from Italy. Its unique bolt design reduces muzzle climb compared to its counterparts.",
      caliber: "12g Buckshot/Slug",
      magazineSize: 12,
      imageUrl: "https://i.gyazo.com/c150e4e8aee7ef17e31a32c40cd53f6e.jpg",
    });

    const shotgun3 = await createShotguns({
      name: "M4 Super 90",
      description:
        "This gas powered combat shotgun is widely considered the best of its breed. Reliable and fast firing, its only major drawback is how quickly you'll empty it if you're not careful.",
      caliber: "12g Buckshot/Slug",
      magazineSize: 8,
      imageUrl: "https://i.gyazo.com/0d4541ff8875e59547ff141efe547b5f.jpg",
    });
  } catch (error) {
    console.error("Error creating initial shotguns");
    throw error;
  }
}

async function createInitialLaunchers() {
  try {
    const launcher1 = await createLaunchers({
      name: "M32A1 Flash",
      description:
        "A rotary grenade launcher originally made for military use with high-explosive ammunition, it has found its use with Los Suenos' riot control units and SWAT teams.",
      imageUrl: "https://i.gyazo.com/dba9db41c158ab81bb525a6b32729b98.jpg",
    });
  } catch (error) {
    console.error("Error creating initial launchers");
    throw error;
  }
}

async function createInitialLessLethals() {
  try {
    const lessLethal1 = await createLessLethal({
      name: "Beanbag Shotgun",
      description:
        "This less lethal shotgun fires powerful 12GA beanbag rounds that immobilize suspects on impact. Requires control, as repeat shots have the potential to unintentionally kill your target.",
      imageUrl: "https://i.gyazo.com/5f9af77ec334ae1ea7ff941d9b6c5dd0.jpg",
    });

    const lessLethal2 = await createLessLethal({
      name: "R7 Launcher",
      description:
        "This modern, mag-fed pepperball gun features full length rails and familiar AR-style controls. Lower capacity than its cousin, the TAC700, but customizable and with a more open field of view. Can also fire baton rounds.",
      imageUrl: "https://i.gyazo.com/d561e19dcedec7647b0fc6943663308a.jpg",
    });
  } catch (error) {
    console.error("Error creating initial less lethals");
    throw error;
  }
}

async function createInitialSidearms() {
  try {
    const sidearm1 = await createSidearms({
      name: ".357 Magnum",
      description:
        "This powerful revolver is limited to only six shots but boasts a substantial power behind each one. High on recoil and awkward to reload, it's a relic of policing that finds a home in the hands of officers that stand by tradition.",
      caliber: ".357",
      magazineSize: 6,
      imageUrl: "https://i.gyazo.com/68e66038ce664a939cf83f1dcf6aa578.jpg",
    });

    const sidearm2 = await createSidearms({
      name: "G19",
      description:
        "Chambered in 9x19mm, the G19's dependability and high capacity in an age when revolvers still ruled the world have found it a permanent home in public and private security agencies worldwide.",
      caliber: "9x19mm",
      magazineSize: 15,
      imageUrl: "https://i.gyazo.com/497d347d437ba40aefc4a4752ee9d41a.jpg",
    });

    const sidearm3 = await createSidearms({
      name: "M45A1",
      description:
        "An improved version of the 1911 developed to meet the requirements of special operation forces in the US military, it has found popularity in law enforcement use with its accurate barrel and sleep ergonomics. Fires .45 ACP from a 14-round magazine.",
      caliber: ".45 ACP",
      magazineSize: 14,
      imageUrl: "https://i.gyazo.com/f63a9b1c96251183fb5f626ef0960a1a.jpg",
    });

    const sidearm4 = await createSidearms({
      name: "P92X",
      description:
        "The standard issue service pistol of the United States military for nearly thirty years, this modernized design has found a second life in the hands of police units across the country. Precise and reliable, it requires little modification to be effective in the field.",
      caliber: "9x19mm",
      magazineSize: 15,
      imageUrl: "https://i.gyazo.com/e1c4c359eb8139cb8e000eee96de39c9.jpg",
    });

    const sidearm5 = await createSidearms({
      name: "57 USG",
      description:
        "This modern, high capacity pistol boasts a proprietary cartridge with excellent penetration. Useful for bypassing body armor, but suffers from worse handling than some other designs. Fires 5.7x28mm from a 17-round magazine.",
      caliber: "5.7x28mm",
      magazineSize: 17,
      imageUrl: "https://i.gyazo.com/327f24dd3f173a6274dd10676db5c769.jpg",
    });

    const sidearm6 = await createSidearms({
      name: "USP45",
      description:
        "This German made pistol is chambered in .45 ACP and boasts a higher capacity than other handguns of its caliber. Excellent iron sights and ergonomics have made it a popular option for police.",
      caliber: ".45 ACP",
      magazineSize: 12,
      imageUrl: "https://i.gyazo.com/8d556a81d21338273656549fcfc7c0af.jpg",
    });

    const sidearm7 = await createSidearms({
      name: "Taser",
      description:
        "This nonlethal companion is at home in the holsters of police officers everywhere. Useful for stunning noncompliant persons in order to disarm or arrest them. Be wary, as not every target will respond to it the same way.",
      caliber: "Taser Cartridge",
      magazineSize: 1,
      imageUrl: "https://i.gyazo.com/5f2e466c8c32c363b3ff0f00604f6804.jpg",
    });
  } catch (error) {
    console.error("Error creating initial sidearms");
    throw error;
  }
}

async function createInitialAmmoTypes() {
  const ammo1 = await createAmmoTypes({
    name: "Armor Piercing",
    description:
      "Rifle-caliber Armor Piercing(AP) rounds reduce the effectivness of steel or ceramic plates and shoot through soft body armor like kevlar. Operators must be mindful of over-penetration and what is behind your intended target, especially if they are not wearing body armor.",
    imageUrl: "https://i.gyazo.com/2488facf4837f2db30e584755efc2150.png",
  });

  const ammo2 = await createAmmoTypes({
    name: "Jacketed Hollow Points",
    description:
      "Jacketed Hollow Point(JHP) expand on impact, causing greater wounds and reducing the risk of over-penetration in civiian environments. Less effective against armored suspects, however.",
    imageUrl: "https://i.gyazo.com/480d2a909b661ce5557b3e9b019eb652.png",
  });
}

async function createInitialArmor() {
  const armor1 = await createArmor({
    name: "Anti Stab Vest",
    description:
      "This reinforced anti-stab vest provides the operator with extra protection against edged weapons, and its lightweight form gives them the capability to carry more equipment.",
    imageUrl: "https://i.gyazo.com/45c1bc93291698ba7018f76450b9f2be.jpg",
  });
  const armor2 = await createArmor({
    name: "Light Armor",
    description:
      "This basic plate carrier allows for peak performance and comfort.",
    imageUrl: "https://i.gyazo.com/353b07d7ce5f33f45182f148c768effc.jpg",
  });

  const armor3 = await createArmor({
    name: "Heavy Armor",
    description:
      "This heavy armor vest trades carrying capacity with more ballistic protection and coverage, allowing the operator to shrug off heavy fire.",
    imageUrl: "https://i.gyazo.com/dfa61676ac764e09e86a224bfeca6fb8.jpg",
  });
}

async function createInitialTacticals() {
  const tactical1 = await createTacticals({
    name: "Mirrorgun",
    description: "Allows you to look under doors, and around corners.",
    imageUrl: "https://i.gyazo.com/96866fcd403f9522b7c9bfcff26f0989.png",
  });

  const tactical2 = await createTacticals({
    name: "Breaching Shotgun",
    description:
      "Quickly and effectively blows open doors using frangible slugs. Not ideal for combat.",
    imageUrl: "https://i.gyazo.com/05092a8aad2239a1d544e09f8e43b0d2.png",
  });

  const tactical3 = await createTacticals({
    name: "Battering Ram",
    description: "Knock, knock. Used for getting past doors.",
    imageUrl: "https://i.gyazo.com/d33b3d00553a2c3a98f275b2a1c8e507.png",
  });

  const tactical4 = await createTacticals({
    name: "Ballistic Shield",
    description: "To protect against direct fire. Only usable with sidearms.",
    imageUrl: "https://i.gyazo.com/d840e7f166c21920d7bea02413d155b5.png",
  });

  const tactical5 = await createTacticals({
    name: "M320 with Flashbang",
    description: "Blinds and disorients those caught in its blast.",
    imageUrl: "https://i.gyazo.com/d8939a5a4f66e205232626659579d114.png",
  });

  const tactical6 = await createTacticals({
    name: "M320 with Stinger",
    description: "Disperses rubber balls that stun and disorient targets.",
    imageUrl: "https://i.gyazo.com/033df81bafaef577e51769ac5fdfe4fe.png",
  });

  const tactical7 = await createTacticals({
    name: "M320 with Gas",
    description:
      "Causes difficulty breathing, burning sensations, and blurred vision.",
    imageUrl: "https://i.gyazo.com/26a699d73ea39f846381abd297033eb9.png",
  });
}

async function createInitialGrenades() {
  try {
    const grenade1 = await createGrenades({
      name: "Flashbang",
      description: "Blinds and disorients those caught in it's blast",
      imageUrl: "https://i.gyazo.com/f8b31d76e64b636f73f3b225d85ca816.png",
    });

    const grenade2 = await createGrenades({
      name: "CS Gas",
      description:
        "Causes difficulty breathing, burning sensations, and blurred vision.",
      imageUrl: "https://i.gyazo.com/a8572ce2350087ef7aa8544696af3bfb.png",
    });

    const grenade3 = await createGrenades({
      name: "Stinger Grenade",
      description: "Disperses rubber balls that stun and disorient targets.",
      imageUrl: "https://i.gyazo.com/feafcdf239578fe06b36c2e039c6d6ac.png",
    });
  } catch (error) {
    console.error("Error creating initial grenades");
    throw error;
  }
}

async function createInitialDeployables() {
  try {
    const tactical1 = await createDeployables({
      name: "C2 Explosives",
      description:
        "These explosive charges can be used to blow open locked doors, stunning those on the other side.",
      imageUrl: "https://i.gyazo.com/dcf700693bfb287ea2949ff14946740b.png",
    });

    const tactical2 = await createDeployables({
      name: "Door Wedge",
      description: "Blocks a door from opening.",
      imageUrl: "https://i.gyazo.com/59bd17194e016c071fcd9f44c9b4216d.png",
    });

    const tactical3 = await createDeployables({
      name: "Lockpick Gun",
      description: "The Lockpick Gun allows you to unlock doors quietly.",
      imageUrl: "https://i.gyazo.com/4888324d4e814886a84ed8fc732580d7.png",
    });

    const tactical4 = await createDeployables({
      name: "Pepper Spray",
      description:
        "Blinds and disorients those who are hit in the face or chest.",
      imageUrl: "https://i.gyazo.com/5c7b864c1d662781208b536d465a4538.png",
    });
  } catch (error) {
    console.error("Error creating initial deployables");
    throw error;
  }
}

async function createInitialHeadwear() {
  try {
    const headwear1 = await createHeadwear({
      name: "NVGS",
      description:
        "Bifocal night vision goggles for use in night operations or raids during low-light.",
      imageUrl: "https://i.gyazo.com/037d27cdb21d44da88fc0b96cfd289c3.jpg",
    });

    const headwear2 = await createHeadwear({
      name: "CBRN Riot Gasmask",
      description:
        "High-performance chemical protective mask for use when handling irritants such as CS or CN.",
      imageUrl: "https://i.gyazo.com/7d1c33bb0d064b5d6b2327ae6acd05e1.jpg",
    });

    const headwear3 = await createHeadwear({
      name: "Anti-Flash Goggles",
      description:
        "The lenses of these tactical goggles are lacquered with a B-ESP coating designed to mitigate bright lights and scratches.",
      imageUrl: "https://i.gyazo.com/16d042595fa45a92665633cb72fd0232.jpg",
    });

    const headwear4 = await createHeadwear({
      name: "Ballistic Facemask",
      description:
        "Mask capable of stopping most small-arms projectiles and some less-lethal.",
      imageUrl: "https://i.gyazo.com/3e8387ff6abac0306b5822a2f40ac7b6.jpg",
    });
  } catch (error) {
    console.error("Error creating initial headwear");
    throw error;
  }
}

async function createInitialArmorMaterial() {
  try {
    const material1 = await createArmorMaterial({
      name: "Kevlar",
      description:
        "While not as protective as steel or ceramic plates, this soft body armor allows officers to move quickly and confidently without fully sacrificing protection. A long standing friend of law enforcement.",
      imageUrl: "https://i.gyazo.com/82559b78fe2ec6f69364aaae7260fde6.png",
    });

    const material2 = await createArmorMaterial({
      name: "Steel",
      description:
        "Though less often seen in police departments today, Steel Plates provide solid protection against most firearms at the cost of being restrictively heavy. Useful against pistol and all rifle calibers.",

      imageUrl: "https://i.gyazo.com/602fc977e08adbc46cb192c155203273.png",
    });

    const material3 = await createArmorMaterial({
      name: "Ceramic",
      description:
        "Modern and commomplace, Ceramic Plates are lighter than steel and do a better job of spreading the momentum of a bullet to reduce the felt impact. Useful against pistol and most rifle calibers.",

      imageUrl: "https://i.gyazo.com/99c99e07ce9bbc70e4ad40ad30fce3df.png",
    });
  } catch (error) {
    console.error("Error creating initial armor material");
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
    await createInitialShotguns();
    await createInitialLaunchers();
    await createInitialLessLethals();
    await createInitialSidearms();
    await createInitialAmmoTypes();
    await createInitialArmor();
    await createInitialTacticals();
    await createInitialGrenades();
    await createInitialDeployables();
    await createInitialHeadwear();
    await createInitialArmorMaterial();
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
    const map1 = await getMapById(1);
    console.log("Get map by Id result: ", map1);

    console.log("Calling getMapByName");
    const neon = await getMapByName("Neon Nightclub");
    console.log("Get map by name result: ", neon);

    console.log("Calling getAllMissions");
    const missions = await getAllMissions();
    console.log("This is all missions", missions);

    console.log("Calling getMissionsById");
    const mission1 = await getMissionById(2);
    console.log("Get mission by id result: ", mission1);

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
    const gun1 = await getSubmachineGunById(3);
    console.log("Get submachine gun by id result: ", gun1);

    console.log("Calling getAllShotguns");
    const shotguns = await getAllShotguns();
    console.log("Get all shotguns result: ", shotguns);

    console.log("Calling getShotgunById");
    const shotgun1 = await getShotgunById(1);
    console.log("Get shotgun by id result: ", shotgun1);

    console.log("Calling getAllLaunchers");
    const launchers = await getAllLaunchers();
    console.log("Get all launchers result: ", launchers);

    console.log("Calling getAllLessLethals");
    const lessLethal = await getAllLessLethals();
    console.log("Get all less lethal result: ", lessLethal);

    console.log("Calling getLessLethalById");
    const lessLethal1 = await getLessLethalById(2);
    console.log("Get less lethal by id result: ", lessLethal1);

    console.log("Calling get all sidearms");
    const sidearms = await getAllSidearms();
    console.log("Get all sidearms result: ", sidearms);

    console.log("Calling getSidearmById");
    const sidearm1 = await getSidearmById(4);
    console.log("Get sidearm by id result: ", sidearm1);

    console.log("Calling getAllAmmoTypes");
    const ammo = await getAllAmmoTypes();
    console.log("Get all ammo types result: ", ammo);

    console.log("Calling get ammo type by id");
    const ammo1 = await getAmmoTypeById(2);
    console.log("Get ammo type by id result: ", ammo1);

    console.log("Calling getAllArmor");
    const armors = await getAllArmor();
    console.log("Get all armor result: ", armors);

    console.log("Calling getArmorById");
    const armor1 = await getArmorById(3);
    console.log("Get armor by id result: ", armor1);

    console.log("Calling getAllTacticals");
    const tacticals = await getAllTacticals();
    console.log("Get all tacticals result: ", tacticals);

    console.log("Calling getTacticalsById");
    const tactical1 = await getTacticalById(4);
    console.log("Get tacticals by id result", tactical1);

    console.log("Calling get all grenades");
    const grenades = await getAllGrenades();
    console.log("Get all grenades result: ", grenades);

    console.log("Calling getGrenadeById");
    const grenade1 = await getGrenadeById(2);
    console.log("Get grenade by id result: ", grenade1);

    console.log("Calling getAllDeployables");
    const deployables = await getAllDeployables();
    console.log("Get all deployables result: ", deployables);

    console.log("Calling getDeploaybleById");
    const deployable1 = await getDeployableById(3);
    console.log("Get deployable by id result: ", deployable1);

    console.log("Calling getAllHeadwear");
    const headwears = await getAllHeadwear();
    console.log("Get all headwear result: ", headwears);

    console.log("Calling getHeadwearById");
    const headwear1 = await getHeadwearById(3);
    console.log("Get headwear by id result: ", headwear1);

    console.log("Calling getAllArmorMaterial");
    const materials = await getAllArmorMaterial();
    console.log("Get all armor material result: ", materials);

    console.log("Calling getArmorMaterialById");
    const material1 = await getArmorMaterialById(3);
    console.log("Get armor material by id result: ", material1);
  } catch (error) {
    console.error("Error testing database");
    throw error;
  }
}

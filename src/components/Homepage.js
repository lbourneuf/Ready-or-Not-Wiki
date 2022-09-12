import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="video">
          <ReactPlayer url="https://www.youtube.com/watch?v=v6xu8Dy6lvs" />
        </div>
        <h1> Ready or Not</h1>
        <p>
          Ready or Not is a realistic, tactical, first person shooter developed
          by VOID Interactive , released into an Alpha state on the August 19,
          2019 on Windows PC. Developed on Epic Games's Unreal Engine 5, Ready
          or Not later released into Steam Early Access on December 17, 2022,
          receiving very positive reviews.
        </p>
        <p>
          Ready or Not is currently on sale at a base price of $39.99 USD. The
          Supporter edition DLC is also available for $79.99 USD.
        </p>

        <aside className="aside">
          <h1 className="aside-title"> Ready or Not</h1>
          <img
            src="https://i.gyazo.com/7a4dbced8a389e2862117a801bf3b919.png"
            className="ron-home-img"
          />

          <p>Developer: VOID Interactive</p>

          <p>Engine: Unreal Engine 4</p>
          <p>Platform: Windows PC</p>
          <p>Genre: Tactical First-Person Shooter</p>
        </aside>

        <h2 className="homepage-title">Story & Setting</h2>
        <p>
          Ready or Not takes place in a 'twisted facsimile' of the United States
          of America. One which is downtrodden, cruel, and corrupt. Missions are
          set in places that range from derelict buildings to high-end penthouse
          apartments.
        </p>
        <p>
          The game takes place in the city of Los Suenos. While there is not a
          fully developed story for Ready or Not, mini-stories are placed
          throughout the environments, giving players insight into Los Suenan
          lives.
        </p>

        <h2 className="homepage-title">Gameplay</h2>
        <p>
          Ready or Not emphasizes smart, tactical play that follows realistic
          Rules of Engagement (RoE) that dictate what level of force a player is
          allowed to employ and when. This means that, unlike a regular first
          person shooter, players cannot usually shoot suspects on sight, but
          have to make attempts at getting suspects to surrender. However,
          should a suspect pose an immediate threat to life players do not have
          to attempt arrest, and may employ lethal force to eliminate the
          threat.
        </p>
        <p>
          To emphasize the importance of following the ROE, player performances
          are graded after each mission's conclusion, with penalties enforced
          depending on how severe and numerous infractions are.
        </p>

        <h3 c>Realism First</h3>

        <p>
          VOID Interactive has consulted with police teams globally to create
          rules of engagement and a scoring system that are both challenging and
          realistic. In order to push the bar further with realism, Ready or Not
          models ballistic penetration, ricochets[1], kevlar and plate dynamics,
          as well as projectile expansion and momentum.
        </p>

        <h3>Robust and Natural Controls</h3>
        <p>
          Explore a deep and involved weapon handling and player maneuvering
          system, geared towards providing officers with an unprecedented level
          of control over their situational effectiveness. Ready or Not utilizes
          a simple and organic control scheme which won’t have players fumbling
          around, forgetting dozens of key bindings.
        </p>

        <h3>Planning System</h3>
        <p>
          Organize an approach and strategize through floor plans and mission
          briefs, then execute the mission in real time. Officers can decide to
          deploy with items such as ballistic shields, door rams, tactical
          ladders, and much more. Swat units can also choose to enlist personnel
          to assist with the situation, including sniper teams and negotiators.
        </p>

        <h3>Diverse Modes</h3>
        <p>
          Bring order to chaos online with friends through a tactical
          cooperative experience, lead a crack team of AI-driven swat members in
          a solo, story-rich campaign[1], or battle a rogue organization in a
          fierce and competitive multiplayer environment.
        </p>

        <h3>Intelligent Customization</h3>
        <p>
          With access to over 60 unique items, players are given the tools to
          tackle any situation. The right combination of weapon optics, muzzle
          modifications, magazine types and foregrip variations gives an officer
          the edge in combat. Alternatively, load up with plates and heavy armor
          to prevent a quick end, at the expense of agility. Officers can also
          personalize their unit with team-specific patches and uniforms.
        </p>
      </div>
    </div>
  );
};

export default Homepage;

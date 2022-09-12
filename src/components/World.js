import React from "react";
import { Link } from "react-router-dom";

const World = () => {
  return (
    <div className="world-container">
      <div className="world-content">
        <h1> Los Suenos </h1>
        <p>
          "Life in Los Suenos is unforgiving. The sidewalks are littered with
          the tents of the homeless, people clamor for money to keep themselves
          off the streets. Criminal activity is at an all time high." -
          Headquarter's Briefing on Los Suenos
        </p>
        <p>
          Los Suenos is the fictional setting of Ready or Not. Located on the
          West Coast of the United States near the Mexican border, the city is
          downtrodden with crime at record heights due to an unstable economic
          and political climate.
        </p>

        <aside className="world-aside">
          <h1 className="world-aside-title">Los Suenos</h1>
          <img
            className="los-suenos-img"
            src="https://i.gyazo.com/98bf30231c8eee7f03cf80db3439d84a.jpg"
          />
        </aside>

        <h1> Locations </h1>
        <ul className="locations-list">
          <Link to="/maps/1">
            <li>Caesars Cars Dealership</li>
          </Link>
          <Link to="/maps/2">
            <li>Cherryessa Farm</li>
          </Link>
          <Link to="/maps/3">
            <li>Cherryessa Farm</li>
          </Link>
          <Link to="/maps/4">
            <li>213 Park Homes</li>
          </Link>

          <Link to="/maps/5">
            <li>Neon Nightclub</li>
          </Link>

          <Link to="/maps/6">
            <li>Brisa Cove</li>
          </Link>

          <Link to="/maps/7">
            <li>Port Hokan</li>
          </Link>

          <Link to="/maps/8">
            <li>Wenderly Hills Hotel</li>
          </Link>

          <Link to="/maps/9">
            <li>Voll Health House</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default World;

import React from "react";

function Header() {
  return (
    <div>
      <div className="main-container">
        <div id="top" align="center">
          <h1>Welcome to eHealth Africa, Time Zone Page</h1>
          <p>
            This page will enable you to see all the countries that share the
            same timezone and know when to reach out accordingly to the team
            members working in those countries.
          </p>
          <p />
        </div>
      </div>
      <p style={{ color: "black", fontSize: "2em" }}>
        The table below show the name, capital, population, timezones and flag
        of the countries.
      </p>
      <p align="center">
        {" "}
        Current Timezone: <span id="timezone" />{" "}
      </p>
    </div>
  );
}

export default Header;

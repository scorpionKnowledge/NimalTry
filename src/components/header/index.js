import React, { useState } from "react";

import "./style.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isLogInState, setLogInState] = useState(true);
  const LoginButton = () => {
    return (
      <>
        {isLogInState ? (
          <button onClick={() => setLogInState(false)}>Logout </button>
        ) : (
          <button onClick={() => setLogInState(true)}>Login</button>
        )}
      </>
    );
  };
  return (
    <>
      <header>
        <ul className="header-menu">
          {isLogInState && (
            <>
              <li>
                <Link to="/">Home</Link>
                {/* <NavLink >Home</NavLink> */}
              </li>
              <li>
                {/* <a href="/classcomp">classcomp</a> */}
                {/* <Link to="/classcomp">classcomp</Link> */}
                <NavLink
                  to="/classcomp"
                  className={(isActive) => (isActive ? "active" : null)}
                >
                  classcomp
                </NavLink>
              </li>
              <li>
                <a href="/userlist">userlist</a>
              </li>
              <li>
                <a href="/funcomp">funcomp</a>
              </li>
              <li>
                <a href="/profile-card">ScientistListPage</a>
              </li>
            </>
          )}
          <li>
            <LoginButton />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;

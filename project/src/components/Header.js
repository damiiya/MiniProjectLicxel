import React from "react";
import "../style/Header.css";

function Header() {
  return (
    <div className="mainHeader">
      <div className="headerContainer">
        <image className="headerImage" src="./logo.svg" alt="">
          {/* {user ? (
            <button>Log Out</button>
          ) : (
            <div class="headerLogInContainer">
              <button>Log In</button>
              <button>Sign Up</button>
            </div>
          )} */}
        </image>
      </div>
    </div>
  );
}

export default Header;

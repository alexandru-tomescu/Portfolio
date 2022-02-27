import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames, withCopyright) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        {withCopyright && <SocialMedia />}
        <div className="app__wrapper app__flex">
          <Component />

          {withCopyright && <div className="copyright">
            <p className="p-text">Cristea Mihai</p>
            <p className="p-text">All rights reserved</p>
          </div>}
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;

import React from "react";
import "./index.css";

// icons
import { HomeIcon, SearchIcon } from "../../icons";

function TabBar() {
  return (
    <div className="TabBar">
      <div className="TabBar__Item">
        <HomeIcon />
      </div>
      <div className="TabBar__Item">
        <SearchIcon />
      </div>
      <div className="TabBar__Item">Add post</div>
      <div className="TabBar__Item">Reel</div>
      <div className="TabBar__Item">Profile</div>
    </div>
  );
}

export default TabBar;

import React from "react";
import "./List.css";

//List and list items component for list of available products and for displaying all farms

export function List({ children }) {
  return (
    <div className="list-overflow-container listcontainer">
      <ul className="list-group listprops">{children}</ul>
    </div>
  );
}

//props only relevant to farmerprofile.js currently
export function ListItem(props) {
  return <li className="list-group-item">{props.children}</li>;
}
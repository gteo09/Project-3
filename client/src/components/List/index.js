import React from "react";

//List and list items component for list of available products and for displaying all farms

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

//props only relevant to farmerprofile.js currently
export function ListItem(props) {
  return <li className="list-group-item">{props.color}, {props.name}</li>;
}
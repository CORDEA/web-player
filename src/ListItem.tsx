import React from "react";
import MaterialIcon from "@material/react-material-icon";
import "./ListItem.css";

const ListItem = () => (
  <div className="ListItem">
    <p className="ListItem-title"></p>
    <MaterialIcon className="ListItem-action" icon="play_circle_outline"/>
  </div>
)

export default ListItem;

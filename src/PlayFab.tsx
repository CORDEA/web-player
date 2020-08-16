import React from "react";
import {Fab} from "@material/react-fab";
import MaterialIcon from "@material/react-material-icon";
import "./PlayFab.css";

const PlayFab = () => (
  <div className="PlayFab">
    <Fab icon={<MaterialIcon icon="play_arrow"/>}/>
  </div>
)

export default PlayFab;

import React from "react";
import MaterialIcon from "@material/react-material-icon";
import "./ListItem.css";
import {Music} from "./store/player/types";

type Props = {
  music: Music
}

const ListItem = (props: Props) => (
  <div className="ListItem">
    <p className="ListItem-title">{props.music.file.name}</p>
    <MaterialIcon className="ListItem-action" icon="play_circle_outline"/>
  </div>
)

export default ListItem;

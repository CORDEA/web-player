import React from "react";
import MaterialIcon from "@material/react-material-icon";
import {Music} from "./store/player/types";
import "./MusicItem.css";

type Props = {
  music: Music
}

const MusicItem = (props: Props) => (
  <div className="MusicItem">
    <p className="MusicItem-title">{props.music.file.name}</p>
    <MaterialIcon className="MusicItem-action" icon="play_circle_outline"/>
  </div>
)

export default MusicItem;

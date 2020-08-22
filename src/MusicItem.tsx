import React from "react";
import MaterialIcon from "@material/react-material-icon";
import {Music} from "./store/player/types";
import "./MusicItem.css";
import {playWith} from "./store/player/actions";
import {connect, ConnectedProps} from "react-redux";

const mapDispatch = {
  play: (music: Music) => playWith(music)
}

const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  music: Music
}

const MusicItem = (props: Props) => (
  <div className="MusicItem">
    <p className="MusicItem-title">{props.music.file.name}</p>
    <MaterialIcon
      className="MusicItem-action"
      icon="play_circle_outline"
      onClick={() => props.play(props.music)}/>
  </div>
)

export default connector(MusicItem);

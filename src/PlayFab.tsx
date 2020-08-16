import React from "react";
import {Fab} from "@material/react-fab";
import MaterialIcon from "@material/react-material-icon";
import "./PlayFab.css";
import {pause, play} from "./store/player/actions";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "./store";

const mapDispatch = {
  click: () => play(),
  pause: () => pause()
}

const mapState = (state: RootState) => ({
  isPlaying: state.player.isPlaying
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const PlayFab = (props: Props) => (
  <div className="PlayFab">
    <Fab
      icon={
        <MaterialIcon
          icon={props.isPlaying ? "pause" : "play_arrow"}/>
      }
      onClick={props.isPlaying ? props.pause : props.click}/>
  </div>
)

export default connector(PlayFab);

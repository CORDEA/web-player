import React from "react";
import {Fab} from "@material/react-fab";
import MaterialIcon from "@material/react-material-icon";
import "./PlayFab.css";
import {play} from "./store/player/actions";
import {connect, ConnectedProps} from "react-redux";

const mapDispatch = {
  click: () => play()
}

const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const PlayFab = (props: Props) => (
  <div className="PlayFab">
    <Fab
      icon={<MaterialIcon icon="play_arrow"/>}
      onClick={props.click}/>
  </div>
)

export default connector(PlayFab);

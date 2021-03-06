import React from "react";
import MaterialIcon from "@material/react-material-icon";
import "./DropView.css";
import {connect, ConnectedProps} from "react-redux";
import {dropFile} from "./store/player/actions";
import {ThunkDispatch} from "redux-thunk";
import {PlayerActionTypes} from "./store/player/types";
import {RootState} from "./store";

const mapDispatch = (dispatch: ThunkDispatch<RootState, null, PlayerActionTypes>) => ({
  drop: (files: FileList) => dispatch(dropFile(files))
})

const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const DropView = (props: Props) => (
  <div
    className="DropView"
    draggable="true"
    onDragOver={(e) => {
      e.preventDefault()
      e.dataTransfer.dropEffect = "copy"
    }}
    onDrop={(e) => {
      e.preventDefault()
      props.drop(e.dataTransfer.files)
    }}>
    <MaterialIcon className="DropView-icon" icon="audiotrack"/>
  </div>
)

export default connector(DropView);

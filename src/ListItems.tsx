import React from "react";
import {RootState} from "./store";
import {connect, ConnectedProps} from "react-redux";
import ListItem from "./ListItem";

const mapState = (state: RootState) => ({
  musics: state.player.musics
})

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const ListItems = (props: Props) => (
  <div>
    {props.musics.map(music => <ListItem music={music} key={music.id}/>)}
  </div>
)

export default connector(ListItems);

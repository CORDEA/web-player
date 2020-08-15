import React from "react";
import {RootState} from "./store";
import {connect, ConnectedProps} from "react-redux";
import MusicItem from "./MusicItem";

const mapState = (state: RootState) => ({
  musics: state.player.musics
})

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const MusicList = (props: Props) => (
  <div>
    {props.musics.map(music => <MusicItem music={music} key={music.id}/>)}
  </div>
)

export default connector(MusicList);

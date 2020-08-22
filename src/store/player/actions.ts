import {DROP, Music, PAUSE, PLAY, PlayerActionTypes} from "./types";
import {ThunkAction} from "redux-thunk";
import {v4 as uuid} from 'uuid';
import {Howl} from "howler";
import {RootState} from "../index";

export const dropFile = (
  files: FileList
): ThunkAction<void, RootState, unknown, PlayerActionTypes> => async dispatch => {
  const file = files[0]
  const result: string = await new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result
      if (typeof result === "string") {
        resolve(result)
      }
    }
    reader.readAsDataURL(file)
  })
  dispatch(
    {
      type: DROP,
      music: {
        id: uuid(),
        url: result,
        file: file
      }
    }
  )
}

const _play = async (player: Howl) => {
  const onPlay = new Promise(resolve => {
    player.once("play", () => {
      resolve()
    })
  })
  player.play()
  await onPlay
}

export const play = (): ThunkAction<void, RootState, unknown, PlayerActionTypes> =>
  async (dispatch, getState) => {
    const state = getState()
    if (state.player.musics.length === 0) {
      return
    }
    const player = state.player.player ?? new Howl({
      src: [state.player.musics[0].url]
    })
    await _play(player)
    dispatch({
      type: PLAY,
      player: player,
    })
  }

export const playWith = (music: Music): ThunkAction<void, RootState, unknown, PlayerActionTypes> =>
  async (dispatch, getState) => {
    const state = getState()
    const player = state.player.player ?? new Howl({
      src: [music.url]
    })
    await _play(player)
    dispatch({
      type: PLAY,
      player: player,
    })
  }

export const pause = (): ThunkAction<void, RootState, unknown, PlayerActionTypes> =>
  async (dispatch, getState) => {
    const player = getState().player.player
    if (!player) {
      return
    }
    const onPause = new Promise(resolve => {
      player.once("pause", () => {
        resolve()
      })
    })
    player.pause()
    await onPause
    dispatch({
      type: PAUSE
    })
  }

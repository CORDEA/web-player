import {PlayerActionTypes, PlayerState} from "./types";
import {Howl} from "howler";

const initialState: PlayerState = {
  isPlaying: false,
  musics: []
}

function playerReducer(state = initialState, action: PlayerActionTypes): PlayerState {
  switch (action.type) {
    case "PLAY": {
      if (state.musics.length === 0) {
        return state
      }
      const sound = new Howl({
        src: [state.musics[0].url]
      })
      sound.play()
      return {
        ...state,
        isPlaying: true
      }
    }
    case "PAUSE": {
      return state
    }
    case "DROP": {
      return {
        ...state,
        musics: state.musics.concat(action.music)
      }
    }
    default:
      return state
  }
}

export default playerReducer

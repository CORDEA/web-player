import {PlayerActionTypes, PlayerState} from "./types";

const initialState: PlayerState = {
  isPlaying: false,
  player: null,
  musics: []
}

function playerReducer(state = initialState, action: PlayerActionTypes): PlayerState {
  switch (action.type) {
    case "PLAY": {
      return {
        ...state,
        isPlaying: true,
        player: action.player
      }
    }
    case "PAUSE": {
      return {
        ...state,
        isPlaying: false
      }
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

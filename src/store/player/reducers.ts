import {PlayerActionTypes, PlayerState} from "./types";

const initialState: PlayerState = {
  isPlaying: false,
  musics: []
}

function playerReducer(state = initialState, action: PlayerActionTypes): PlayerState {
  switch (action.type) {
    case "PLAY": {
      return state
    }
    case "PAUSE": {
      return state
    }
    case "DROP": {
      return state
    }
    default:
      return state
  }
}

export default playerReducer

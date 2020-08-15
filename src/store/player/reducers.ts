import {PlayerActionTypes, PlayerState} from "./types";
import {v4 as uuid} from 'uuid';

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
      return {
        ...state,
        musics: state.musics.concat({id: uuid(), file: action.files[0]})
      }
    }
    default:
      return state
  }
}

export default playerReducer

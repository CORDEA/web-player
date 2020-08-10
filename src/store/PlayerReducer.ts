import {PlayerState} from "./PlayerState";
import {PlayerActionTypes} from "./PlayerAction";

const initialState: PlayerState = {
  isPlaying: false
}

function playerReducer(state = initialState, action: PlayerActionTypes): PlayerState {
  switch (action.type) {
    case "PLAY": {
      return state
    }
    case "PAUSE": {
      return state
    }
  }
}

export default playerReducer

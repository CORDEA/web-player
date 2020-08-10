export const PLAY = "PLAY"
export const PAUSE = "PAUSE"

interface PlayAction {
  type: typeof PLAY
}

interface PauseAction {
  type: typeof PAUSE
}

export type PlayerActionTypes = PlayAction | PauseAction

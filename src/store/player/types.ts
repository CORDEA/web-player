export interface PlayerState {
  isPlaying: boolean
}

export const PLAY = "PLAY"
export const PAUSE = "PAUSE"
export const DROP = "DROP"

interface PlayAction {
  type: typeof PLAY
}

interface PauseAction {
  type: typeof PAUSE
}

interface DropAction {
  type: typeof DROP
  files: FileList
}

export type PlayerActionTypes = PlayAction | PauseAction | DropAction

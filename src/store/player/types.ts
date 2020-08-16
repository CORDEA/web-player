export interface PlayerState {
  isPlaying: boolean,
  musics: Music[]
}

export interface Music {
  id: string
  url: string
  file: File
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
  music: Music
}

export type PlayerActionTypes = PlayAction | PauseAction | DropAction

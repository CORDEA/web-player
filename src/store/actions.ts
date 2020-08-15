import {DROP, PlayerActionTypes} from "./PlayerAction";

export function dropFile(files: FileList): PlayerActionTypes {
  return {
    type: DROP,
    files: files
  }
}

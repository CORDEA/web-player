import {DROP, PlayerActionTypes} from "./types";

export function dropFile(files: FileList): PlayerActionTypes {
  return {
    type: DROP,
    files: files
  }
}

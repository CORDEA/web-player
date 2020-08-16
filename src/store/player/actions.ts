import {DROP, PlayerActionTypes, PlayerState} from "./types";
import {ThunkAction} from "redux-thunk";
import {v4 as uuid} from 'uuid';

export const dropFile = (
  files: FileList
): ThunkAction<void, PlayerState, unknown, PlayerActionTypes> => async dispatch => {
  const file = files[0]
  const result: string = await new Promise(resolve => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result
      if (typeof result === "string") {
        resolve(result)
      }
    }
    reader.readAsDataURL(file)
  })
  dispatch(
    {
      type: DROP,
      music: {
        id: uuid(),
        url: result,
        file: file
      }
    }
  )
}

import React from 'react';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./store";
import thunk from "redux-thunk";
import DropView from "./DropView";
import MusicList from "./MusicList";
import PlayFab from "./PlayFab";
import './App.css';
import '@material/react-fab/dist/fab.css';
import '@material/react-material-icon/dist/material-icon.css';

const store = createStore(rootReducer, applyMiddleware(thunk))

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-container">
          <MusicList />
          <DropView />
        </div>
        <PlayFab />
      </div>
    </Provider>
  );
}

export default App;

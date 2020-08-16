import React from 'react';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./store";
import thunk from "redux-thunk";
import {Fab} from "@material/react-fab";
import MaterialIcon from "@material/react-material-icon";
import DropView from "./DropView";
import MusicList from "./MusicList";
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
        <div className="App-fab">
          <Fab icon={<MaterialIcon icon="play_arrow"/>} />
        </div>
      </div>
    </Provider>
  );
}

export default App;

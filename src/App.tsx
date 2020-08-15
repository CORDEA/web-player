import React from 'react';
import {createStore} from "redux";
import {rootReducer} from "./store";
import {Provider} from "react-redux";
import {Fab} from "@material/react-fab";
import MaterialIcon from "@material/react-material-icon";
import './App.css';
import '@material/react-fab/dist/fab.css';
import '@material/react-material-icon/dist/material-icon.css';
import DropView from "./DropView";
import ListItems from "./ListItems";

const store = createStore(rootReducer)

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-container">
          <ListItems />
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

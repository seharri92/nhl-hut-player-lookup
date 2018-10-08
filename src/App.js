import React, { Component } from 'react';
import './App.css';
import PlayerTable from "./components/PlayerTable";
import PlayerNavBar from "./components/PlayerNavBar";

import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerNavBar/>
        <PlayerTable/>
      </div>
    );
  }
}

export default App;

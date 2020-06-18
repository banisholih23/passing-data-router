import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route, Router
} from 'react-router-dom'

import RegisterPageTask from './pages/RegisterPageTask'
import RegisterUserList from './pages/RegisterUserList'

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/registerpage" exect component={RegisterPageTask} />
            <Route path="/registerlist" exect component={RegisterUserList} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;

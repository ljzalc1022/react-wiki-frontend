import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PageView from './PageView.js'
import PageEdit from './PageEdit.js'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/view/:title" component={PageView}></Route>
        <Route path="/edit/:title" component={PageEdit}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

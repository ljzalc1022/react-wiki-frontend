import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageView from './PageView.js'
import PageEdit from './PageEdit.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/view/:title" element={<PageView />}></Route>
        <Route path="/edit/:title" element={<PageEdit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import PageView from './PageView.js'
import PageEdit from './PageEdit.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/view/FrontPage"/>}></Route>
        <Route path="/view/:title" element={<PageView />}></Route>
        <Route path="/edit/:title" element={<PageEdit />}></Route>
      </Routes>
      <Link to='/'>Back To Top</Link>
    </BrowserRouter>
  );
}

export default App;

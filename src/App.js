import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TopHeadlines from './pages/topHeadlines/TopHeadlines';


function App() {

  return (
    <div>
      {/* <HomePage/> */}
      <Routes>
        <Route path='/' element={<TopHeadlines/>} />
      </Routes>
    </div>

  )
}

export default App; 
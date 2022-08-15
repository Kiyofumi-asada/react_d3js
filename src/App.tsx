import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './component/router';
import Pie from './component/pie';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <br />
          <Routes>
            <Route path="/" element={<Router />} />
            <Route path="pie" element={<Pie />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

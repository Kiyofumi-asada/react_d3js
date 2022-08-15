import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './component/router';
import Pie from './component/pie';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Router />} />
          <Route path="pie" element={<Pie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

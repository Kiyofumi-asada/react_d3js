import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './component/router';
//component
import StudyContainer from './component/study-container';
import PieContainer from './component/pie-container';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Router />} />
          <Route path="study" element={<StudyContainer />} />
          <Route path="pie" element={<PieContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

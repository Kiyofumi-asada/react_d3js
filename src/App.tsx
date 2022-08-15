import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Container from './component/container';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Link to="/">to top</Link>
          <br />
          <Link to="/company">to company</Link>
          <br />
          <Link to="/contact">to contact</Link>

          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="company" element={<Container />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

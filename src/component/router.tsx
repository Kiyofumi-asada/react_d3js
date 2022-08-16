import React from 'react';
import { Link } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <>
      <Link to="/study">StudyD3</Link>
      <br />
      <Link to="/pie">PieChart</Link>
    </>
  );
};

export default Router;

import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Link } from 'react-router-dom';

const StudyContainer: React.FC = () => {
  const sayHello = () => d3.select('body').append('p').text('hello');

  return (
    <>
      <div className="main-wrap">
        <button onClick={sayHello}>say hello</button>
      </div>
      <Link to="/">トップへ戻る</Link>
    </>
  );
};

export default StudyContainer;

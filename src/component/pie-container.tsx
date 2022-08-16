import React, { useState } from 'react';
import * as d3 from 'd3';
import { Link } from 'react-router-dom';
import Pie from './pie';

const PieContainer: React.FC = () => {
  const [width, height, innerRadius, outerRadius] = [200, 200, 60, 100];

  // ボタンをクリックした時、ランダムなデータを生成する
  const generateData = (length = 5, value?: number) =>
    d3.range(length).map((v, idx) => ({
      date: idx,
      value: value === null || value === undefined ? Math.random() * 100 : value,
    }));
  const [data, setData] = useState(generateData());
  const changeData = () => {
    setData(generateData());
  };

  return (
    <>
      <div>
        <div>
          <button onClick={changeData}>Click</button>
        </div>
        <div>
          <Pie data={data} width={width} height={height} innerRadius={innerRadius} outerRadius={outerRadius} />
        </div>
      </div>
      <Link to="/">トップへ戻る</Link>
    </>
  );
};

export default PieContainer;

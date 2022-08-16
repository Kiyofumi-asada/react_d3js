import React, { useState } from 'react';
import * as d3 from 'd3';
import { Link } from 'react-router-dom';
import Pie from './pie';

const PieContainer: React.FC = () => {
  const [width, height, innerRadius, outerRadius] = [500, 500, 50, 200];

  // ボタンクリック時にランダムなデータを生成
  const generateData = (length = 10, value?: number) =>
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
          <button onClick={changeData}>Chart生成</button>
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

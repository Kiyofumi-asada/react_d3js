import React, { useState } from 'react';
import * as d3 from 'd3';
import { Link } from 'react-router-dom';
import Pie from './pie';

const PieContainer: React.FC = () => {
  const [width, height] = [500, 500];
  const [innerRadius, setInnerRadius] = useState<number>(50);
  const [outerRadius, setOuterRadius] = useState<number>(220);

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
  const sizeUp = () => {
    setInnerRadius(innerRadius * 1.1);
    setOuterRadius(outerRadius * 1.1);
    setData(generateData());
  };
  const sizeDown = () => {
    setInnerRadius(innerRadius * 0.9);
    setOuterRadius(outerRadius * 0.9);
    setData(generateData());
  };
  console.log(outerRadius);

  return (
    <>
      <div>
        <div>
          <button onClick={changeData}>Chart生成</button>
        </div>
        サイズ変更
        <div>
          <button onClick={sizeUp}>↑</button>
          <button onClick={sizeDown}>↓</button>
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

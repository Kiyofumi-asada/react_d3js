import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type TProps = {
  data: any;
  width: number;
  height: number;
  innerRadius: number;
  outerRadius: number;
};

const Pie: React.FC<TProps> = ({ data, width, height, innerRadius, outerRadius }) => {
  const ref = useRef(null);
  const cache = useRef(data);
  const createPie = d3
    .pie()
    .value((d: any) => d.value)
    .sort(null);
  const createArc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const format = d3.format('.2f');

  useEffect(() => {
    const createData: any = createPie(data);
    const prevData = createPie(cache.current);
    const group = d3.select(ref.current);
    const groupWithData = group.selectAll('g.arc').data(createData);
    groupWithData.exit().remove();
    const groupWithUpdate = groupWithData.enter().append('g').attr('class', 'arc');

    const path = groupWithUpdate.append('path').merge(groupWithData.select('path.arc'));
    const arcTween = (d: any, i: any) => {
      const interpolator = d3.interpolate(prevData[i], d);
      return (t: any) => createArc(interpolator(t));
    };
    path
      .attr('class', 'arc')
      .attr('fill', (d, i: any) => colors(i))
      .transition()
      .attrTween('d', arcTween as any);

    const text = groupWithUpdate.append('text').merge(groupWithData.select('text'));
    text
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .style('fill', 'white')
      .style('font-size', 10)
      .transition()
      .attr('transform', (d: any) => `translate(${createArc.centroid(d)})`)
      .tween('text', (d, i, nodes) => {
        const interpolator = d3.interpolate(prevData[i], d as any);

        return (t) => d3.select(nodes[i]).text(format(interpolator(t).value));
      });

    cache.current = data;
  }, [data]);

  return (
    <>
      <svg width={width} height={height}>
        <g ref={ref} transform={`translate(${outerRadius} ${outerRadius})`} />
      </svg>
    </>
  );
};

export default Pie;

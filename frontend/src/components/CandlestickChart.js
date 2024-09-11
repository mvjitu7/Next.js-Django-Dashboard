import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

export default function CandlestickChart({ data }) {
  const candlestickChartRef = useRef(null);

  useEffect(() => {
    if (data && candlestickChartRef.current) {
      candlestickChartRef.current.innerHTML = '';

      const chart = createChart(candlestickChartRef.current, { width: candlestickChartRef.current.clientWidth, height: 300 });
      const candlestickSeries = chart.addCandlestickSeries();
      candlestickSeries.setData(data);
    }
  }, [data]);

  return <div id="candlestick-chart" ref={candlestickChartRef} style={{ width: '100%', height: '300px' }} />;
}

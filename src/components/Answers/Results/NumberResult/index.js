import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';

// function useAutoIncrement(initialValue = 0, step = 1, finalValue = 10) {
//   const [count, setCount] = useState(initialValue);

//   useEffect(() => {
//     const timer = window.setInterval(() => {
//       do {
//         setCount((c) => c + step);
//       } while (initialValue !== finalValue);
//     }, 10);
//     return function () {
//       clearInterval(timer);
//     };
//   }, []);
//   return count;
// }

const NumberResult = ({ productResult }) => {
  const NumbResult = Number(Math.floor(productResult));
  // const count = useAutoIncrement(0, 1);
  // Chart style
  const style = {
    height: '60vh',
    width: '100%',
  };

  const option = {
    polar: {
      radius: [30, '80%'],
    },
    angleAxis: {
      max: NumbResult + 200,
      startAngle: 90,
    },
    radiusAxis: {
      type: 'category',
      data: ['a'],
    },
    tooltip: {},
    series: {
      type: 'bar',
      data: [NumbResult],
      coordinateSystem: 'polar',
      label: {
        show: true,
        position: 'middle',
        color: '#fff',
        fontSize: '26px',
        fontWeight: 'bold',
        formatter: '{c}',
      },
    },
  };
  return (
    <ReactEcharts option={option} style={style} className="scatter-chart" />
  );
};

NumberResult.propTypes = {
  productResult: PropTypes.number,
};

NumberResult.defaultProps = {
  productResult: null,
};

// == Export
export default NumberResult;

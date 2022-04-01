import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

const NumberResult = ({ productResult }) => {
  const NumbResult = Number(Math.floor(productResult));
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

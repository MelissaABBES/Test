import PropTypes from 'prop-types';
import moment from 'moment';
import ReactEcharts from 'echarts-for-react';

const DateResult = ({ ArrayResult }) => {
  // DATES
  const formatDateX = [];
  let momentDateX = '';
  ArrayResult.sort().forEach((element) => {
    momentDateX = moment(element).format('MM-YYYY');
    formatDateX.push(momentDateX);
    return momentDateX;
  });

  const formatDateY = [];
  let momentDateY = '';
  ArrayResult.sort().forEach((element) => {
    momentDateY = moment(element).format('DD');
    formatDateY.push(momentDateY);
    return momentDateY;
  });

  const newResult = Object.keys(formatDateX, formatDateY).map((cle) => [formatDateY[cle], formatDateX[cle]]);

  const datas = newResult.sort().map((res) => (
    [res[1], res[0]]
  ));

  // Chart style
  const style = {
    height: '60vh',
    width: '100%',
  };

  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
    },
    yAxis: {
      type: 'category',
      boundaryGap: false,
    },
    markLine: {
      symbol: ['none', 'none'],
      label: { show: false },
      data: [{ xAxis: 1 }, { xAxis: 2 }, { xAxis: 4 }],
    },
    series: [
      {
        symbolSize: 20,
        type: 'scatter',
        data: datas,
      },
    ],
  };

  return (
    <ReactEcharts option={option} style={style} className="scatter-chart" />
  );
};

DateResult.propTypes = {
  ArrayResult: PropTypes.array,
};

DateResult.defaultProps = {
  ArrayResult: null,
};

// == Export
export default DateResult;

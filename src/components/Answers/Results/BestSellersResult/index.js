import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

const BestSellersResult = ({ ObjectResult }) => {
  const myResult = ObjectResult;
  const newResult = Object.keys(myResult).map((cle) => [cle, myResult[cle]]);

  const datas = newResult.sort().map((res) => (
    { value: res[1], name: res[0] }
  ));

  // Chart style
  const style = {
    height: '60vh',
    width: '100%',
  };

  // Chart options
  const option = {
    legend: {
      top: 'bottom',
    },
    toolbox: {
      show: false,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: 'Best Sellers Chart',
        type: 'pie',
        radius: [30, 160],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        data: datas,
      },
    ],
  };

  return (
    <ReactEcharts option={option} style={style} className="pie-chart" />
  );
};

BestSellersResult.propTypes = {
  ObjectResult: PropTypes.object,
};

BestSellersResult.defaultProps = {
  ObjectResult: null,
};

// == Export
export default BestSellersResult;

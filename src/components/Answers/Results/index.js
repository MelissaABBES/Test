// == Import
import xtype from 'xtypejs';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactEcharts from 'echarts-for-react';
import './styles.css';
import BestSellersResult from './BestSellersResult';
import DateResult from './DateResult';
import NumberResult from './NumberResult';

// == Composant
const Results = ({ results }) => {
  // PRODUCTS
  const myResult = results;
  const newResult = Object.keys(myResult).map((cle) => [cle, myResult[cle]]);

  const datas = newResult.sort().map((res) => (
    { value: res[1], name: res[0] }
  ));

  // Chart style
  const style = {
    height: '90vh',
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
        radius: [50, 250],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        data: datas,
      },
    ],
  };

  if (xtype.type(results) === 'object') {
    return (
      // <BestSellersResult ObjectResult={results} />
      <ReactEcharts option={option} style={style} className="pie-chart" />
    );
  }
  if (xtype.type(results) === 'array') {
    return (
      <DateResult ArrayResult={results} />
    );
  }

  if (xtype.type(results) === 'number') {
    return (
      <NumberResult productResult={results} />
    );
  }

  return (
    <div className="details">
      <p />
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
  ]),
};

Results.defaultProps = {
  results: null,
};

// == Export
export default Results;

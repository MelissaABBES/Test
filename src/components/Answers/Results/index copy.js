// == Import
import xtype from 'xtypejs';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import './styles.css';
import BestSellersResult from './BestSellersResult';
import DateResult from './DateResult';
import NumberResult from './NumberResult';

// == Composant
const Results = ({ results }) => {
  const myResult = results;
  const newResult = Object.keys(myResult).map((cle) => [cle, myResult[cle]]);

  const dataNames = newResult.sort().map((resProduct) => resProduct[0]);
  const dataValue = newResult.sort().map((resValue) => resValue[1]);

  console.log(dataNames);
  console.log(dataValue);

  // Chart style
  const style = {
    height: '90vh',
    width: '100%',
  };

  // Chart options
  const option = {
    backgroundColor: 'rgb(43, 51, 59)',
    toolbox: {
      show: true,
      feature: {
        mark: {
          show: false,
        },
        magicType: {
          show: true,
          type: ['pie', 'funnel'],
        },
      },
    },
    graphic: [
      {
        type: 'group',
        rotation: Math.PI / 4,
        bounding: 'raw',
        right: 200,
        bottom: 100,
        z: 100,
        children: [
          {
            type: 'rect',
            left: 'center',
            top: 'center',
            z: 100,
            shape: {
              width: 600,
              height: 50,
            },
          },
          {
            type: 'text',
            left: 'center',
            top: 'center',
            z: 100,
          },
        ],
      },
    ],
    // Hover Tooltip
    // {a} = series:[{name:}]
    // {b} = series:[{data: [{name:}]}]
    // {c} = series:[{data: [{value:}]
    tooltip: {
      trigger: 'item',
      formatter: '{a}<br/><strong>{b}</strong>: {c}',
    },
    title: {
      text: 'PieHalfRose',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc',
      },
    },
    calculable: true,
    legend: {
      icon: 'circle',
      x: 'center',
      y: '50px',
      data: dataNames,
      textStyle: {
        color: '#fff',
      },
    },
    series: [
      {
        name: `${dataNames}`,
        type: 'pie',
        animationDuration: 2000,
        animationEasing: 'quarticInOut',
        radius: [10, 150],
        avoidLabelOverlap: false,
        startAngle: 90,
        hoverOffset: 5,
        center: ['50%', '50%'],
        roseType: 'area',
        selectedMode: 'multiple',
        label: {
          normal: {
            show: true,
            formatter: '{b} Suffix', // {c} data: [{value:},]
          },
          emphasis: {
            show: true,
          },
        },
        labelLine: {
          normal: {
            show: true,
            smooth: false,
            length: 20,
            length2: 10,
          },
          emphasis: {
            show: true,
          },
        },
        data: dataValue,
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

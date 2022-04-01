// == Import
import xtype from 'xtypejs';
import PropTypes from 'prop-types';
import './styles.css';
import BestSellersResult from './BestSellersResult';
import DateResult from './DateResult';
import NumberResult from './NumberResult';

// == Composant
const Results = ({ results }) => {
  if (xtype.type(results) === 'object') {
    return (
      <BestSellersResult ObjectResult={results} />
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

// == Import
import PropTypes, { string } from 'prop-types';
import './styles.css';
import { useTypeResult } from '../../../Utils';
import BestSellersResult from './BestSellersResult';
import DateResult from './DateResult';
import NumberResult from './NumberResult';



// == Composant
const Results = ({ results, types }) => {
  // const [type, sortResultType] = useTypeResult();
  // const fetchType = type.find((el) => el === types);

  function SortType() {
    const [type, sortResultType] = useTypeResult();
    const fetchType = type.find((el) => el === types);
    if (fetchType === 'qcm') {
      return (
        <BestSellersResult ObjectResult={results} />
      );
    }
    if (fetchType === 'date') {
      return (
        <DateResult ArrayResult={results} />
      );
    }
    if (fetchType === 'numeric') {
      return (
        <NumberResult productResult={results} />
      );
    }
  }

  return (
    <div className="details">
      <SortType />
    </div>
  );
};

Results.propTypes = {
  types: PropTypes.string,
  results: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
  ]),
};

Results.defaultProps = {
  types: string,
  results: null,
};

// == Export
export default Results;

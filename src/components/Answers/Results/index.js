// == Import
import xtype from 'xtypejs';
import moment from 'moment';
import PropTypes from 'prop-types';
import './styles.css';

// == Composant
const Results = ({ result }) => {
  if (xtype.type(result) === 'object') {
    const myResult = result;
    const newResult = Object.keys(myResult).map((cle) => [cle, myResult[cle]]);
    return (
      newResult.sort().map((res) => (
        <div className="multiple-answers">
          <div className="answer">
            {res[0]}: {res[1]}
          </div>
        </div>
      ))
    );
  }
  if (xtype.type(result) === 'array') {
    const formatDate = [];
    let momentDate = '';
    result.forEach((element) => {
      momentDate = moment(element).format('DD/MM/YYYY');
      formatDate.push(momentDate);
      return momentDate;
    });
    return (
      formatDate.map((res) => (
        <div className="multiple-answers">
          <div className="answer">
            { res }
          </div>
        </div>
      ))
    );
  }

  if (xtype.type(result) === 'number') {
    const NumbResult = Number(result);
    return (
      <div className="answer">
        <p>{Math.floor(NumbResult)}</p>
      </div>
    );
  }

  return (
    <div className="details">
      <p />
    </div>
  );
};

Results.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
  ]),
};

Results.defaultProps = {
  result: null,
};

// == Export
export default Results;

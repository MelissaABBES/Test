// == Import
import xtype from 'xtypejs';
import './styles.css';

// == Composant
const Results = ({ result }) => {
  if (xtype.type(result) === 'object') {
    const myResult = result;
    const newResult = Object.keys(myResult).map((cle) => [cle, myResult[cle]]);
    return (
      newResult.map((res) => (
        <div className="multiple-answers">
          <p>{res[0]}: {res[1]}</p>
        </div>
      ))
    );
  }
  if (xtype.type(result) === 'array') {
    return (
      result.map((res) => (
        <p>{res}</p>
      ))
    );
  }

  if (xtype.type(result) === 'number') {
    return (
      <p>{result}</p>
    );
  }

  return (
    <div className="details-survey">
      <p />
    </div>
  );
};

// == Export
export default Results;

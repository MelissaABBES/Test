import PropTypes from 'prop-types';

const BestSellersResult = ({ ObjectResult }) => {
  const myResult = ObjectResult;
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
};

BestSellersResult.propTypes = {
  ObjectResult: PropTypes.object,
};

BestSellersResult.defaultProps = {
  ObjectResult: null,
};

// == Export
export default BestSellersResult;

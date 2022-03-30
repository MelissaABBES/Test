import PropTypes from 'prop-types';

const NumberResult = ({ productResult }) => {
  const NumbResult = Number(productResult);
  return (
    <div className="answer">
      <p>{Math.floor(NumbResult)}</p>
    </div>
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

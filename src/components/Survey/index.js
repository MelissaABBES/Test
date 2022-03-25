// == Import
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';
import Answers from '../Answers';

// == Composant
const Survey = ({
  name, code, handleCode, handleVisibility, infosVisible,
}) => {
  const { codeList, isLoad, isNotLoad } = useSelector((state) => state);
  const surveyVisible = infosVisible ? 'survey-selected' : 'survey';
  const answerVisible = infosVisible ? 'details-survey-open' : 'details-survey';

  const handleClick = (evt) => {
    evt.preventDefault();
    handleCode();
    handleVisibility();
  };

  if (codeList === code) {
    return (
      <div className={surveyVisible}>

        <div
          className="body"
          key={code}
          onClick={handleClick}
        >
          <div className="body_name">{name}</div>
          <div className="body_code">{code}</div>
        </div>
        <div className={answerVisible}>
          { isLoad && <Answers key={name} /> }
        </div>
      </div>
    );
  }

  return (
    <div className="survey">

      <div
        className="body"
        key={code}
        onClick={handleClick}
      >
        <div className="body_name">{name}</div>
        <div className="body_code">{code}</div>
      </div>
      <div className={answerVisible}>
        { isNotLoad && <Answers visibility={handleVisibility} key={name} /> }
      </div>
    </div>
  );
};

Survey.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  handleCode: PropTypes.func.isRequired,
  handleVisibility: PropTypes.func.isRequired,
  infosVisible: PropTypes.bool.isRequired,
};

// == Export
export default Survey;

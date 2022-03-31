// == Import
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';
import Answers from '../Answers';
import {
  useCodeList, isSurveyAnswersLoaded, isSurveyAnswersIsNotLoaded, useResultType,
} from '../../Utils';

// == Composant
const Survey = ({
  name, code, handleCode, handleVisibility,
}) => {
  const isLoaded = useSelector(isSurveyAnswersLoaded);
  const isNotLoaded = useSelector(isSurveyAnswersIsNotLoaded);

  const getCodeList = useCodeList();
  const surveyVisible = isLoaded ? 'survey-selected' : 'survey';
  const answerVisible = isLoaded ? 'details-survey-open' : 'details-survey';

  const handleClick = (evt) => {
    evt.preventDefault();
    handleCode();
    handleVisibility();
  };

  if (getCodeList === code) {
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
          { isLoaded && <Answers key={name} /> }
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
        { isNotLoaded && <Answers key={name} /> }
      </div>
    </div>
  );
};

Survey.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  handleCode: PropTypes.func.isRequired,
  handleVisibility: PropTypes.func.isRequired,
};

// == Export
export default Survey;

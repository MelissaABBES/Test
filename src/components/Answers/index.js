// == Import
import './styles.css';
import { useSelector } from 'react-redux';
import { isAnswersInSurvey } from '../../selectors';
import Results from './Results';

// == Composant
const Answers = () => {
  const answers = useSelector(isAnswersInSurvey);
  return (
    <div className="detail">
      {
        answers.map((element) => (
          <div className="type">
            <div className="label">{element.label}</div>
            <Results key={element.type} results={element.result} types={element.type} />
          </div>
        ))
      }
    </div>
  );
};

// == Export
export default Answers;

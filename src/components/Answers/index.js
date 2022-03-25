// == Import
import './styles.css';
import { useSelector } from 'react-redux';
import Results from './Results';

// == Composant
const Details = ({ visibility }) => {
  const answers = useSelector((state) => state.answers);
  const classVisible = visibility ? 'details-survey-close' : 'details-survey-open';
  return (
    <div className="detail">
      {
        answers.map((element) => (
          <div className="type">
            <div className="label">{element.label}</div>
            <Results key={element.type} result={element.result} />
          </div>
        ))
      }
    </div>
  );
};

// == Export
export default Details;

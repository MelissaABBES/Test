// == Import
import './styles.css';
import { useSelector } from 'react-redux';
import Results from './Results';

// == Composant
const Details = () => {
  const answers = useSelector((state) => state.answers);
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

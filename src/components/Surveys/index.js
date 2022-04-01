// == Import
import './styles.css';
import { useDispatch } from 'react-redux';
import Survey from '../Survey';
import {
  changeVisibility,
  fetchDetails, getCodeList, isLoaded, isNotLoaded,
} from '../../actions';
import { useSortList, usefetchAllList } from '../../Utils';

// == Composant
const Surveys = () => {
  const dispatch = useDispatch();

  usefetchAllList();

  const isSortList = useSortList();

  return (
    <div className="surveys">
      {isSortList.map((survey) => (
        <Survey
          key={survey.code}
          {...survey}
          handleVisibility={() => {
            const isVisible = isLoaded();
            dispatch(isVisible);
            const isNotVisible = isNotLoaded();
            dispatch(isNotVisible);
            const visibilitySwitch = changeVisibility();
            dispatch(visibilitySwitch);
          }}
          handleCode={() => {
            const getGoodCodeList = getCodeList(survey.code);
            dispatch(getGoodCodeList);
            const getAllAnswers = fetchDetails();
            dispatch(getAllAnswers);
          }}
        />
      ))}
    </div>
  );
};

// == Export
export default Surveys;

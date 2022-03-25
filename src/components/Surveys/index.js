// == Import
import './styles.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Survey from '../Survey';
import {
  fetchDetails, fetchList, getCodeList, isLoaded, isNotLoaded,
} from '../../actions';

// == Composant
const Surveys = () => {
  const lists = useSelector((state) => state.list);
  const sortList = [].concat(lists).sort((a, b) => (a.itemM > b.itemM ? 1 : -1));
  const { isLoad } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = fetchList();
    dispatch(action);
  }, []);

  return (
    <div className="surveys">
      {sortList.map((survey) => (
        <Survey
          key={survey.code}
          {...survey}
          handleVisibility={() => {
            const isVisible = isLoaded();
            dispatch(isVisible);
            const isNotVisible = isNotLoaded();
            dispatch(isNotVisible);
          }}
          handleCode={() => {
            const action2 = getCodeList(survey.code);
            dispatch(action2);
            const action = fetchDetails();
            dispatch(action);
          }}
          infosVisible={isLoad}
        />
      ))}
    </div>
  );
};

// == Export
export default Surveys;

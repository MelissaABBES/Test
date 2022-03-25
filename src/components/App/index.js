// == Import
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Surveys from '../Surveys';
import './styles.css';

import { fetchList } from '../../actions';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = fetchList();
    dispatch(action);
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Feedback Survey</h1>
      </header>
      <main>
        <div className="head">
          <div className="head_name">Name</div>
          <div className="head_code">Code</div>
        </div>
        <Surveys />
      </main>
    </div>
  );
};

// == Export
export default App;

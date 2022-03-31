// == Import
import Surveys from '../Surveys';
import './styles.css';

// == Composant
const App = () => (
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

// == Export
export default App;

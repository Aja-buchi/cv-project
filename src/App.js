import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/generalinfo">
          General Information
        </Link>
        <Link to="/educationexp">
          Educational Experience
        </Link>
        <Link to="/practicalexp">
          PracticalExperience
        </Link>

      </nav>
      <Routes>
        <Route path='/generalinfo' element={<GeneralInformation />} />
        <Route path='/educationexp' element={<EducationalExperience />} />
        <Route path='/practicalexp' element={<PracticalExperience />} />
      </Routes>
    </div>
  );
}

export default App;

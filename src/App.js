import logo from './logo.svg';
import './App.css';
import './css/themes.css'
import Quiz2 from './compennets/quiz2';
import Quiz from './compennets/quiz';
import QuizContext from './compennets/QuizContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ThemesList from './compennets/ThemesList';
import ThemeTechnoList from './compennets/ThemeTechnoList';
import Postservice from './api/postapi';
import QuizApi from './api/quizapi';
import AddQuiz from './addquizform';

function App() {
  return (
    <div className="App">  
    
    <Router >
      <Routes>
       <Route path='/quiz/:theme'  element={<QuizContext />} />
       <Route path='/theme' loader={QuizApi}  element={<ThemeTechnoList />} />
    <Route path='/form' element={<AddQuiz />} />
     </Routes>
    </Router>   
    
  </div>
  );
}

export default App;

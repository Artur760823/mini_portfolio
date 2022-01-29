import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path='/' exact />
        </Routes>

      </Router>

    </>
  );
}

export default App;

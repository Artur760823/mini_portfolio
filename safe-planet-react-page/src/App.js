import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>

      </Router>

    </>
  );
}

export default App;

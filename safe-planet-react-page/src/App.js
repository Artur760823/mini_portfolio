import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import Threats from './components/pages/Threats';
import Solutions from './components/pages/Solutions';
import Activists from './components/pages/Activists';
import JoinUs from './components/pages/JoinUs';

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/threats' exact element={<Threats />} />
          <Route path='/solutions' exact element={<Solutions />} />
          <Route path='/activists' exact element={<Activists />} />
          <Route path='/join-us' exact element={<JoinUs />} />
        </Routes>

      </Router>

    </>
  );
}

export default App;

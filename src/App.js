import { Routes, Route, HashRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Programming from './pages/Programming';
import Performing from './pages/Performing';
import Writing from './pages/Writing';
import ContactMe from './pages/Contactme';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/Programming" element={<Programming />} />
        <Route path="/Performing" element={<Performing />} />
        <Route path="/Writing" element={<Writing />} />
        <Route path="/Contact" element={<ContactMe />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

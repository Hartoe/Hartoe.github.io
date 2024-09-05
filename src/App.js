import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Programming" element={<Navbar active="program"/>} />
        <Route path="/Performing" element={<Navbar active="perform"/>} />
        <Route path="/Writing" element={<Navbar active="write"/>} />
        <Route path="/Contact" element={<Navbar active="contact"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

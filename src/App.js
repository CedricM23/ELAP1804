import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Culture from './Components/Culture';
import People from './Components/People';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Culture" element={<Culture />} />
        <Route path="/People" element={<People />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

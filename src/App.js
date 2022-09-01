import './App.css';
import Nevbar from './component/nevbar/Nevbar';
import Home from './pages/home/Home';
import Calculator from './pages/calc/Calculator';
import Weather from './pages/weather/Weather';
import About from './pages/about/About';
import {Route, Routes} from "react-router-dom";
import Header from './component/header/Header';

function App() {
  return (
    <>
    <Header />
      <Nevbar />
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="weather" element={<Weather />} />
        <Route path="about" element={<About />} />
      </Routes>
      </div>
    </>
  );
}

export default App;

import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Blank } from './components/Blank';
import { Route, Routes } from 'react-router-dom';

import { Map } from './components/Map';
import History from './components/History';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Blank />} />
        <Route path="/map" element={<Map />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TopBar from './Components/TopBar';
import MainWebpage from './Components/Pages/MainWebpage';
import FootBar from './Components/FootBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <TopBar />
          <Routes>
            <Route path="/" element={<MainWebpage />} />
            <Route path="/actor" />
            <Route path="/actors/new" />
          </Routes>
          <FootBar />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

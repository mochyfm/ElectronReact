import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TopBar from './Components/TopBar';
import MainWebpage from './Components/Pages/MainWebpage';

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
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

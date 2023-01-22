import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TopBar from './Components/TopBar';
import MainWebpage from './Components/Pages/MainWebpage';
import ActorList from './Components/Pages/ActorList';
import CustomForm from './Components/Pages/CustomForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="appContainer">
          <TopBar />
          <Routes>
            <Route path="/" element={<MainWebpage />} />
            <Route path="/actors" element={<ActorList />} />
            <Route path="/actors/new" element={<CustomForm />} />
            <Route path="/actors/edit/:_id" element={<CustomForm />} />
            <Route path="/actors/delete/:_id" element={<CustomForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>    
    </BrowserRouter>
  </>
  );
}

export default App;

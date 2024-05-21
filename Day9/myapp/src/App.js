import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Admin from "./components/Admin";

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

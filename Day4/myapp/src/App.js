import "./App.css";
import Home from "./page/Home";
import About from "./page/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-default bg-primary">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" href="/">
                WebSiteName
              </Link>
            </div>
            <ul className="nav navbar-nav bg-warning">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about-us" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

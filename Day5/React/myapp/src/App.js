import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Website LOGO
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

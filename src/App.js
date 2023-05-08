import React,{useEffect,useState} from 'react';
import NavBar from './Components/Header_Items/Navbar';
import Preloader from './Components/pre';
import ScrollToTop from './Components/ScrolltoTop';
import Home from './Components/Home_items/Home';
import Footer from './Components/Footer';
import About from './Components/About_items/About';
import ResumeNew from './Components/Resume_items/Resume';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";



function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
         <ScrollToTop />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         <Route path="/resume" element={<ResumeNew />} />
            {/* <Route path="/project" element={<Projects />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
       <Footer /> 
      </div>
    </Router>
    </div>
  );
}

export default App;

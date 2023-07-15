import {BrowserRouter, Routes, Route} from"react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Land from './pages/land';
import Blog from './pages/blog'


function App() {
  return (
      <BrowserRouter>

     <Navbar/>

      <Routes>

      <Route path="/land" element={<Land/>} />

      <Route path="/about" element={<About/>} />

      <Route path="/portfolio" element={<Portfolio/>}></Route>

      <Route path="/contact" element={<Contact/>}></Route> 

      <Route path="/resume" element={<Resume/>}></Route>

      <Route path="/blog" element={<Blog/>}></Route>

      </Routes>

      <Footer/>

      </BrowserRouter> 
  );
}

export default App;
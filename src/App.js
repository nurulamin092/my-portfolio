import { Route, Routes } from "react-router-dom";
import About from "./pages/Home/About";
import Home from './pages/Home/Home';
import Projects from "./pages/Home/Projects";
import Skills from "./pages/Home/Skills";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="skills" element={<Skills></Skills>}></Route>
        <Route path="projects" element={<Projects></Projects>}></Route>
      </Routes>

    </div>
  );
}

export default App;

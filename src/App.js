import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from './pages/Home/Home';
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>

    </div>
  );
}

export default App;

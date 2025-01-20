import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPlace from "./pages/AddPlace";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

const [argentinaPlaces, setArgentinaPlaces] = useState([]);
const [brasilPlaces, setBrasilPlaces] = useState([]);
const [ukPlaces, setUkPlaces] = useState([]);




  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home 
        setArgentinaPlaces={setArgentinaPlaces} 
        argentinaPlaces={argentinaPlaces} 
        setBrasilPlaces={setBrasilPlaces} 
        brasilPlaces={brasilPlaces} 
        setUkPlaces={setUkPlaces} 
        ukPlaces={ukPlaces}/>} />
        <Route path="/add" element={<AddPlace 
        setArgentinaPlaces={setArgentinaPlaces} 
        argentinaPlaces={argentinaPlaces} 
        setBrasilPlaces={setBrasilPlaces} 
        brasilPlaces={brasilPlaces} 
        setUkPlaces={setUkPlaces} 
        ukPlaces={ukPlaces}/>}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App

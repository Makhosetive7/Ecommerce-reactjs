import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer"
import AdidasPage from "./Pages/AdidasShoePage/AdidasPage"
import NikePage from "./Pages/NikeShoePage/NikePage";
import PumaPage from "./Pages/PumaShoePage/PumaPage";
import { useState } from "react";





function App() {

  const [cart, setCart] = useState([])
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path='/adidasPage' element = {<AdidasPage / >} />
          <Route path='/nikePage' element ={ <NikePage />} />
          <Route path='/pumaPage' element = {<PumaPage />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

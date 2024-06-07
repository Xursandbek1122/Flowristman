import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Contact from "./contact";
import AboutUs from "./aboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route element={<Home/>} path="/" />
         <Route element={<Contact/>} path="/contact" />
         <Route element={<AboutUs/>} path="/aboutUs" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

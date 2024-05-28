import body from "./assets/body.jpg";
import Body from "./pages/Body/Body";
import PainAnalysis from "./pages/PainAnalysis/PainAnalysis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resulte from "./pages/Resulte/Resulte";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/body" element={<Body />} />
          <Route path="/analysis/:id" element={<PainAnalysis />} />
          <Route path="/resulte/:data" element={<Resulte />} />

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

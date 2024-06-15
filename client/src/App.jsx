import React from 'react';
import body from "./assets/body.jpg";
import Body from "./pages/Body/Body";
import PainAnalysis from "./pages/PainAnalysis/PainAnalysis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resulte from "./pages/Resulte/Resulte";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Condations from './pages/Condations/Condations';
function App() {

  const [isLoggedIn, setLoggedIn] = React.useState(localStorage.getItem("isLogin"));

  console.log(isLoggedIn);

  React.useEffect(() => {
    if (isLoggedIn){
      console.log(isLoggedIn);
    }
  }, [isLoggedIn]);
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={ isLoggedIn ?  <Home /> : <Login/>} />

          <Route path="/signup" element={ isLoggedIn ? <Home /> : <Signup />} />
          <Route path="/login" element={ isLoggedIn ? <Home /> : <Login/>} />

          <Route path="/body" element={ isLoggedIn ? <Body /> : <Home/>} />
          <Route path="/analysis/:id" element={ isLoggedIn ? <PainAnalysis /> : <Home/>} />
          <Route path="/resulte/:data" element={ isLoggedIn ? <Resulte /> : <Home/>} />
          <Route path="/terms" element={<Condations /> } />

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

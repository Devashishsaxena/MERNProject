import React from 'react';
import './App.css';
 import { Route, Routes } from "react-router-dom";
import Homes from "./Component/Homes/Homes";
import About from './Component/About/About';
import Services from './Component/Servicess/Services';
import Portfolio from './Component/Portfolio/Portfolio';
import Team from './Component/Team/Team';
import Frequently from './Component/Frequently/Frequently';
import Contact from './Component/Contact/Contact';
 import Register from './Component/Register/Register';
 import Login from './Component/Login/Login';
import Footer from './Component/Footer/Footer';
import UserHomes from './User Protected/User Homes/UserHomes'
import UserAbout from './User Protected/User About/UserAbout';
import UserServices from './User Protected/User Servicess/UserServices';
import UserPortfolio from './User Protected/User Portfolio/UserPortfolio';
import UserTeam from './User Protected/User Team/UserTeam';
import UserFrequently from './User Protected/User Frequently/UserFrequently';
import UserContact from './User Protected/User Contact/UserContact';
import Userverify from './User Protected/User Verify User/Userverify';
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/faq" element={<Frequently />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Routes>
        <Route path="/uapp" element={<UserHomes />} />
        <Route path="/uapp/userabout" element={<UserAbout />} />
        <Route path="/uapp/userservices" element={<UserServices />} />
        <Route path="/uapp/userportfolio" element={<UserPortfolio />} />
        <Route path="/uapp/userteam" element={<UserTeam />} />
        <Route path="/uapp/usercontact" element={<UserContact />} />
        <Route path="/uapp/userfaq" element={<UserFrequently />} />
        <Route path="/uapp/userverify/:email" element={<Userverify />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

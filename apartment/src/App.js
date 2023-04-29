
import './App.css';
import Layout from './components/Layout/Layout';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home1' 
import Announcements from './pages/Announcements' 
import Payment from './pages/Payment' 
import Contact from './pages/Contact' 
import Pagenotfound from './pages/Pagenotfound' 


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/announcements" element={<Announcements/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Pagenotfound/>} />
      </Routes>
      </BrowserRouter>
     

     
    </div>
  );
}

export default App;

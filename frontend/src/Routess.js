import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import SeatBooking from "./components/SeatBooking";
import App from './App';
function Routess() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<RegisterPage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path='/seatbookings' element={<SeatBooking/>}></Route>
        </Routes>
    </Router>
    
  );
}

export default Routess;
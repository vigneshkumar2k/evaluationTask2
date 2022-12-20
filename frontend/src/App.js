
// import { useState } from "react";
// import { Container, Row } from "reactstrap";

// import "./styles.css";
// // import "bootstrap/dist/css/bootstrap.css";
// import SeatBooking from "./components/SeatBooking";
// import SelectSeatType from "./components/SelectSeatType";
// import Confirmation from "./components/Confirmation";
// import TAB_OPTIONS from "./constants/TabOptions";


// function App() {
//   const [tab, setTab] = useState(TAB_OPTIONS.SEAT_TYPE);
//   const [seatSelection, setSeatSelection] = useState({});
//   function handleTabChange(tab, seatSelection) {
//     setTab(tab);
//     setSeatSelection(seatSelection);
//   }


//   return (
//            <Container>
//       <Row>
//         <h1>Welcome to Avatar movie ticket booking system</h1>
//       </Row>
//       {tab === TAB_OPTIONS.SEAT_TYPE ? (
//         <SelectSeatType onNext={handleTabChange} />
//       ) : null}
//       {tab === TAB_OPTIONS.SEAT_SELECTION ? (
//         <SeatBooking onNext={handleTabChange} seatSelection={seatSelection} />
//       ) : null}
//       {tab === TAB_OPTIONS.CONFIRMATION ? (
//         <Confirmation setTab={setTab} seatSelection={seatSelection} />
//       ) : null}
//     </Container> 
    
       
    
//   );
// }

// export default App;


import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
// import SeatBooking from "./components/SeatBooking";
function Routess() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<RegisterPage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            {/* <Route path='/seatbookings' element={<SeatBooking/>}></Route> */}
        </Routes>
    </Router>
    
  );
}

export default Routess;
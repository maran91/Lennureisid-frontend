import './App.css';
import FlightList from './views/pages/flight-list/FlightList.jsx';
import { Route, Routes } from 'react-router-dom';
import { BuyTicket } from './views/pages/buy-ticket/BuyTicket.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FlightList />} />
      <Route path="/flight-seats/:id" element={<BuyTicket />} />
    </Routes>
  );
}

export default App;

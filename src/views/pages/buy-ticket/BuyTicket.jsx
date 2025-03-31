import FlightDetails from './flight-details/FlightDetails.jsx';
import SeatsMap from './seats-map/SeatsMap.jsx';
import useFetch from '../../../hooks/useFetch.js';
import { Button } from 'primereact/button';
import { BuyTicketForm } from './forms/BuyTicketForm.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { SuggestSeats } from './forms/SuggestSeats.jsx';

export const BuyTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const { data: flight, loading, error } = useFetch(`/api/flight-seats?flightId=${id}`);

  if (loading) return <p>Loading flight details...</p>;
  if (error) return <p>Error loading flight: {error.message}</p>;
  if (!flight) return <p>Flight not found.</p>;
  const handleCustomerDataSubmit = (userData) => {
    console.log(userData);
  };

  return (
    <>
      <Button label="Back" icon="pi pi-arrow-left" onClick={() => navigate(-1)}></Button>
      <SuggestSeats />
      <BuyTicketForm handleCustomerDataSubmit={handleCustomerDataSubmit} />
      <FlightDetails />
      <SeatsMap seats={flight} />
    </>
  );
};

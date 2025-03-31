import { useNavigate } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

export const FlightFilter = () => {
  const navigate = useNavigate();

  const [departureDate, setDepartureDate] = useState(null);
  const [departure, setDeparture] = useState('');
  const [priceRange, setPriceRange] = useState([null, null]);
  const [durationFrom, setDurationFrom] = useState(null);
  const [durationTo, setDurationTo] = useState(null);

  const formatDateLocal = (date) => {
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - offset * 60 * 1000);
    return localDate.toISOString().split('T')[0];
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (departure !== '') params.set('departure', departure);
    if (departureDate != null) params.set('departureDate', formatDateLocal(departureDate));
    if (priceRange[0] != null) params.set('priceMin', priceRange[0].toString());
    if (priceRange[1] != null) params.set('priceMax', priceRange[1].toString());
    if (durationFrom != null) params.set('durationFrom', `PT${durationFrom}M`);
    if (durationTo != null) params.set('durationTo', `PT${durationTo}M`);
    navigate(`/?${params.toString()}`, { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        value={departure}
        placeholder="Destination"
        onChange={(e) => setDeparture(e.target.value)}
      />
      <Calendar
        name="departureDate"
        placeholder="Date"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.value)}
        dateFormat="yy-mm-dd"
      />
      <Slider
        value={priceRange}
        onChange={(e) => {
          const value = e.value;
          if (Array.isArray(value) && value.length === 2) {
            setPriceRange(value);
          }
        }}
        min={0}
        max={2000}
        range
      />
      <p>
        Selected price range: ${priceRange[0]} - ${priceRange[1]}
      </p>
      <InputNumber
        value={durationFrom}
        onValueChange={(e) => setDurationFrom(e.value)}
        placeholder="Flight duration from (mins)"
        min={0}
        max={1440}
        suffix=" mins"
      />
      <InputNumber
        value={durationTo}
        onValueChange={(e) => setDurationTo(e.value)}
        placeholder="Flight duration from (mins)"
        min={0}
        max={1440}
        suffix=" mins"
      />
      <Button type="submit">Filter</Button>
    </form>
  );
};

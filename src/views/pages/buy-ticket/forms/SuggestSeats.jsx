import { Checkbox } from 'primereact/checkbox';
import { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

export const SuggestSeats = ({ onSubmitPreferences }) => {
  const [windowSeat, setWindowSeat] = useState(false);
  const [extraLegRoom, setExtraLegRoom] = useState(false);
  const [nearExit, setNearExit] = useState(false);
  const [ticketCount, setTicketCount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const preferences = {
      windowSeat,
      extraLegRoom,
      nearExit,
      ticketCount,
    };
    if (onSubmitPreferences) {
      onSubmitPreferences(preferences);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="windowSeat">Window Seat</label>
        <Checkbox
          inputId="windowSeat"
          onChange={(e) => setWindowSeat(e.checked)}
          checked={windowSeat}
        />
      </div>

      <div>
        <label htmlFor="extraLegRoom">Extra Legroom</label>
        <Checkbox
          inputId="extraLegRoom"
          onChange={(e) => setExtraLegRoom(e.checked)}
          checked={extraLegRoom}
        />
      </div>

      <div>
        <label htmlFor="nearExit">Near Exit</label>
        <Checkbox inputId="nearExit" onChange={(e) => setNearExit(e.checked)} checked={nearExit} />
      </div>
      <div>
        <InputNumber
          placeholder="Ticket amount"
          value={ticketCount}
          onValueChange={(e) => setTicketCount(e.value)}
        />
      </div>
      <Button label="Submit Preferences" onClick={handleSubmit} />
    </form>
  );
};

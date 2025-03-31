const SeatsMap = ({ seats }) => {
  const groupedSeats = {
    A: [],
    B: [],
    C: [],
    D: [],
  };

  seats.forEach((seat) => {
    groupedSeats[seat.seat.rowName].push(seat);
  });
  return (
    <div>
      <div className="w-[50px] h-[50px]  bg-green-500 "></div>
      Green - free seats.
      <div className="w-[50px] h-[50px]  bg-red-500"></div>
      Red - seats taken.
      <div className="w-[50px] h-[50px]  bg-blue-500"></div>
      Blue - suggested seats.
      <h2 className="">Airplane seats from nose to tail.</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {['A', 'B', 'C', 'D'].map((row) => (
          <div key={row} style={{ display: 'flex', gap: '6px' }}>
            {groupedSeats[row].map((seat) => (
              <div
                key={seat.id}
                className={`w-[50px] h-[50px] bg-green-500 ${seat.booked ? 'bg-red-500' : 'bg-green-500'}`}
              >
                {seat.seat.seatNumber}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatsMap;

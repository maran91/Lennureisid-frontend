import { useParams } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch.js';

const FlightDetails = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(`/api/flight/${id}`);
  if (loading) return <p>Loading flight details...</p>;
  if (error) return <p>Error loading flight: {error.message}</p>;
  if (!data) return <p>Flight not found.</p>;

  return (
    <div className="p-4 space-y-2 text-l">
      <div>
        <span className="font-bold">From:</span> <span>{data.departure}</span>
      </div>
      <div>
        <span className="font-bold">To:</span> <span>{data.arrival}</span>
      </div>
      <div>
        <span className="font-bold">Departs:</span>{' '}
        <span>{new Date(data.departureTime).toLocaleString()}</span>
      </div>
      <div>
        <span className="font-bold">Arrives:</span>{' '}
        <span>{new Date(data.arrivalTime).toLocaleString()}</span>
      </div>
      <div>
        <span className="font-bold">Price:</span> <span>${data.price}</span>
      </div>
    </div>
  );
};

export default FlightDetails;

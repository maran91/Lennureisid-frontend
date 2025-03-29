import useFetch from '../hooks/useFetch.js';
import { FlightFilter } from './FlightFilter.jsx';
import { useSearchParams } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Message } from 'primereact/message';

const FlightList = () => {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();

  const url = `/flight?${queryString}`;

  const { data: flights, loading, error } = useFetch(url);

  return (
    <div>
      <h2>Available Flights</h2>
      <FlightFilter />

      {loading && <p>Loading flights...</p>}
      {error && <Message severity="error" text={error.message} />}
      {flights && flights.length === 0 && <p>No flights available.</p>}
      <DataTable
        value={flights}
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}
      >
        <Column field="departure" header="Departs" sortable style={{ width: '16%' }}></Column>
        <Column field="arrival" header="Destination" sortable style={{ width: '16%' }}></Column>
        <Column
          field="departureTime"
          header="Departs"
          sortable
          body={(rowData) => new Date(rowData.arrivalTime).toLocaleString()}
          style={{ width: '16%' }}
        ></Column>
        <Column
          field="arrivalTime"
          header="Arrives"
          body={(rowData) => new Date(rowData.arrivalTime).toLocaleString()}
          sortable
          style={{ width: '16%' }}
        ></Column>
        <Column
          field="flightDuration"
          header="Flight duration"
          sortable
          body={(rowData) => rowData.flightDuration.replace('PT', '')}
          style={{ width: '16%' }}
        ></Column>
        <Column field="price" header="Price" sortable style={{ width: '16%' }}></Column>
      </DataTable>
    </div>
  );
};

export default FlightList;

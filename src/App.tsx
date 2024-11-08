import { useState, useEffect } from 'react'; // Keep the necessary imports only
import MapComponent from './components/MapComponent';
import FilterControls from './components/FilterControls';
import { fetchTrips } from './services/api';

function App() {
  const [trips, setTrips] = useState([]);
  const [timeRange, setTimeRange] = useState<[string, string]>(['2022-01-01T00:00', '2022-01-01T23:59']);
  const [fareRange, setFareRange] = useState<[number, number]>([0, 100]);
  const [distanceRange, setDistanceRange] = useState<[number, number]>([0, 10]);

  useEffect(() => {
    const loadTrips = async () => {
      const data = await fetchTrips(timeRange, fareRange, distanceRange);
      setTrips(data);
    };
    loadTrips();
  }, [timeRange, fareRange, distanceRange]);

  return (
    <div>
      <h1>Yellow Taxi Trip Analytics Dashboard</h1>
      <FilterControls setTimeRange={setTimeRange} setFareRange={setFareRange} setDistanceRange={setDistanceRange} />
      <MapComponent trips={trips} />
    </div>
  );
}

export default App;

import axios from 'axios';

export const fetchTrips = async (
  timeRange: [string, string], 
  fareRange: [number, number], 
  distanceRange: [number, number]
) => {
  // Construct the URL with timeRange, fareRange, and distanceRange
  const url = `https://data.cityofnewyork.us/resource/gkne-dk5s.json?$where=pickup_datetime between '${timeRange[0]}' and '${timeRange[1]}'
               AND fare_amount BETWEEN ${fareRange[0]} AND ${fareRange[1]}
               AND trip_distance BETWEEN ${distanceRange[0]} AND ${distanceRange[1]}`;

  const response = await axios.get(url);
  return response.data;
};

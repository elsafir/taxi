import React from 'react';

interface FilterProps {
  setTimeRange: (range: [string, string]) => void;
  setFareRange: (range: [number, number]) => void;
  setDistanceRange: (range: [number, number]) => void;
}

const FilterControls: React.FC<FilterProps> = ({ setTimeRange, setFareRange, setDistanceRange }) => {
  return (
    <div>
      <h3>Filter Options</h3>
      <label>Time Range:</label>
      <input type="datetime-local" onChange={(e) => setTimeRange([e.target.value, e.target.value])} />
      <label>Fare Range:</label>
      <input type="number" placeholder="Min fare" onChange={(e) => setFareRange([Number(e.target.value), Number(e.target.value)])} />
      <label>Distance Range:</label>
      <input type="number" placeholder="Min distance" onChange={(e) => setDistanceRange([Number(e.target.value), Number(e.target.value)])} />
    </div>
  );
};

export default FilterControls;

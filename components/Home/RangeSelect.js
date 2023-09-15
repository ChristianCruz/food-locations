import React, { useState } from "react";

function RangeSelect() {
  const [radius, setRadius] = useState(10);
  return (
    <div>
      <p className="font-bold">
        Select Radius <span className="text-sm">(in meter)</span>:
      </p>
      <input
        type="range"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        min="1"
        max="100"
        step="10"
        defaultValue={radius}
        onChange={(e) => setRadius(e.target.value)}
      />
      <label htmlFor="">{radius * 100} in meters</label>
    </div>
  );
}
export default RangeSelect;

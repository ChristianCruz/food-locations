import Data from "@/shared/Data";
import React, { useState } from "react";

function SelectRating() {
  const [selectedRating, setSelectedRating] = useState([]);
  const onSelectRating = (isChecked, value) => {
    if (isChecked) {
      // in case more than one box is checked
      setSelectedRating([...selectedRating, value]);
    } else {
      setSelectedRating(selectedRating.filter((n) => n !== value));
    }
    console.log(selectedRating);
  };
  return (
    <div>
      <p className="font-bold">SelectRating</p>
      <div>
        {Data.ratingList.map((item, index) => (
          <div key={index} className="flex justify-between">
            <label>{item.icon}</label>
            <input
              type="checkbox"
              onChange={(e) => onSelectRating(e.target.checked, item.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default SelectRating;

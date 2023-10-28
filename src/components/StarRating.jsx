// Importing necessary dependencies from React and prop-types
import { useState } from "react";
import PropTypes from "prop-types";

// Importing the Star component from a local file
import Star from "./Star";

// Utility function to create an array of a given length
// This can be moved to a separate utils file if desired
const createArray = (length) => [...Array(length)];

// Defining the StarRating functional component

//if not specified totalStars default is 5
export default function StarRating({ style = {}, totalStars = 5 }) {
  // Using the state hook to manage the selectedStars state
  const [selectedStars, setSelectedStars] = useState(0);

  // Rendering the Star components based on the totalStars prop
  return (
    <div style={{padding: "5px", ...style}}>
      {/* Mapping over the array created by createArray and rendering Star components */}
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i} // Using the index as the key (consider using a more unique key if available)
          selected={selectedStars > i} // Passing a boolean prop to Star component based on the selection
          onSelect={() => setSelectedStars(i + 1)} // Callback function to update the selectedStars state
        />
      ))}

      {/* Displaying the number of selected stars out of the total stars */}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </div>
  );
}

// Prop type validation for the totalStars prop
StarRating.propTypes = {
    style: PropTypes.object,
    totalStars: PropTypes.number,
};

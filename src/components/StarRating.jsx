import { useState } from "react";
import PropTypes from "prop-types";
import Star from "./Star";

const createArray = (length) => [...Array(length)]; //create Array function can be moved to utils

export default function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0);

    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i +1)}
                />
            ))}
            <p>{selectedStars} of { totalStars }</p>
        </>
    )
}

StarRating.propTypes = {
    totalStars: PropTypes.number
}
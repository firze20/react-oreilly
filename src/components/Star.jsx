import PropTypes from "prop-types";

import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect}) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

Star.propTypes = {
    selected: PropTypes.bool,
    onSelect: PropTypes.func.isRequired
};

export default Star;

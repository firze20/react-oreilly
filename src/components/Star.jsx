import PropTypes from "prop-types";

import { FaStar } from "react-icons/fa";

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);

Star.propTypes = {
  selected: PropTypes.bool,
};

export default Star;

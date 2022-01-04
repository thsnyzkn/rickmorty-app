import styled from "styled-components";
import PropTypes from "prop-types";

const Error = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #c0ffee; ;
`;

Error.propTypes = {
  children: PropTypes.node.isRequired,
};

Error.defaultProps = {
  children: "Error...",
};

export default Error;

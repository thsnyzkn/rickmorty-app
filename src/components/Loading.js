import styled from "styled-components";
import PropTypes from "prop-types";

const Loading = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

Loading.propTypes = {
  children: PropTypes.node.isRequired,
};

Loading.defaultProps = {
  children: "Loading...",
};

export default Loading;

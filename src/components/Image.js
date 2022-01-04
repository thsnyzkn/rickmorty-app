import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.img`
  border-radius: 6px;
  width: ${({ variant }) =>
    variant === "big" ? "400px" : variant === "small" ? "200px" : "150px"};
  @media (max-width: 768px) {
    width: ${({ variant }) =>
      variant === "big" ? "300px" : variant === "small" ? "150px" : "100px"};
    height: ${({ variant }) =>
      variant === "big" ? "300px" : variant === "small" ? "150px" : "100px"};
  }
  height: ${({ variant }) =>
    variant === "big" ? "400px" : variant === "small" ? "200px" : "150px"};
`;

export default Image;

Image.propTypes = {
  variant: PropTypes.string,
};

Image.defaultProps = {
  variant: "xsmall",
};

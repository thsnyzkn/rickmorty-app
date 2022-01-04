import styled from "styled-components";

const Label = styled.span`
  margin-top: ${({ topSpaced }) => topSpaced && "0.6rem"};
  font-size: 1.25rem;
  font-weight: ${({ weight }) => weight === "bold" && "bold"};
`;

export default Label;

import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};
  width: ${({ fullWidth }) => fullWidth && "100%"};
  justify-content: ${({ justify }) =>
    justify === "evenly" ? "space-evenly" : ""};
`;

export default Flex;

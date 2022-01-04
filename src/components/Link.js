import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const Link = styled(RouterLink)`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
`;

export default Link;

import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const Link = styled(RouterLink)`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export default Link;

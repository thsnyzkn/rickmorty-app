import styled from "styled-components";

const CharactersGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(300px, 1fr);
  margin: 0;
  place-items: center;
  list-style-type: none;
  width: 100%;
  grid-gap: 1rem 2.5rem;
  padding: 1rem;
`;

export default CharactersGrid;

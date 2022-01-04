import styled from "styled-components";
import Label from "./Label";
import Link from "./Link";
import Image from "./Image";
const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    margin-bottom: 10rem;
  }
  padding-top: 2rem;
`;

const EpisodesList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
`;

const Episode = styled.li`
  margin-bottom: 0.125rem;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  color: darkgreen;
`;
const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  color: black;
  font-weight: bold;
  border-radius: 4px;
  &:hover {
    background-color: lightgray;
  }
`;

const CharacterDetailCard = ({ name, image, location, episodes }) => (
  <CardWrapper>
    <StyledLink to="/">Back to Home</StyledLink>
    <Label weight="bold">{name}</Label>
    <Image src={image} alt={`${name}'s visual depiction`} variant="big" />
    <Label>
      <b>Location:</b> {location}
    </Label>
    <EpisodesList>
      <Label weight="bold">5 Recent Episodes</Label>
      {episodes.map(({ name }, index) => (
        <Episode key={index}>{name}</Episode>
      ))}
    </EpisodesList>
  </CardWrapper>
);

export default CharacterDetailCard;

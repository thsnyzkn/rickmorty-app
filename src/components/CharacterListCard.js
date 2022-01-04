import styled from "styled-components";
import Image from "./Image";
import Label from "./Label";
import Link from "./Link";

const StyledListCard = styled.li`
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;

const CharacterListCard = ({ name, image, id }) => {
  return (
    <StyledListCard>
      <Link to={id}>
        <Image src={image} alt={`${name}'s visual depiction`} variant="small" />
        <Label topSpaced>{name}</Label>
      </Link>
    </StyledListCard>
  );
};

export default CharacterListCard;

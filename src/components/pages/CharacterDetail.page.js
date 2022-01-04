import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import CharacterDetailCard from "../CharacterDetailCard";
import Loading from "../Loading";
import Error from "../Error";
import recentFiveEpisodes from "../../utils/recent-five-episodes";

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      episode {
        name
        air_date
      }
      origin {
        name
      }
    }
  }
`;

function CharacterDetailPage() {
  const params = useParams();
  const characterId = params.characterId;
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      id: characterId,
    },
  });
  if (loading || !data?.character) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <CharacterDetailCard
      data-testid="character-container"
      name={data?.character?.name}
      image={data?.character?.image}
      location={data?.character?.origin?.name}
      episodes={recentFiveEpisodes(data?.character?.episode)}
    />
  );
}

export default CharacterDetailPage;

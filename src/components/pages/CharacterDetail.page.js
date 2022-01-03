import { useQuery, gql } from "@apollo/client";
import { useLocation, useParams } from "react-router-dom";

const GET_CHARECTER = gql`
  query getCharecter($id: ID!) {
    character(id: $id) {
      name
      image
      episode {
        name
      }
      location {
        name
        dimension
      }
    }
  }
`;

function CharacterDetailPage() {
  const params = useParams();
  const characterId = params.characterId;
  const { loading, error, data } = useQuery(GET_CHARECTER, {
    variables: {
      id: characterId,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <div>{JSON.stringify(data)}</div>;
}

export default CharacterDetailPage;

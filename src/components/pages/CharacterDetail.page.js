import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_CHARACTER = gql`
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <div>{data?.character?.name}</div>
      <img
        src={data?.character?.image}
        alt={`${data?.character?.name}'s visual depiction`}
      />
      <div>{data?.character?.origin?.name}</div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {[...data?.character?.episode]
          ?.reverse()
          .slice(0, 5)
          .map(({ name, air_date }) => (
            <li>
              {name}-{air_date}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CharacterDetailPage;

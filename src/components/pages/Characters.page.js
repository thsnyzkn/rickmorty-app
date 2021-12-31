import CharactersGrid from "../CharactersGrid";
import { useQuery, gql } from "@apollo/client";
const CHARACTERS_LIST = gql`
  query {
    characters {
      results {
        name
        image
      }
    }
  }
`;

function Characters() {
  const { loading, error, data } = useQuery(CHARACTERS_LIST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <CharactersGrid>
      {data?.characters?.results?.map(({ name, image }, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "2rem",
          }}
        >
          <span>{name}</span>
          <img src={image} alt={`${name}'s visual depiction`} />
        </li>
      ))}
    </CharactersGrid>
  );
}
export default Characters;

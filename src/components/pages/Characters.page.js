import CharactersGrid from "../CharactersGrid";
import { useQuery, gql } from "@apollo/client";
import Link from "../Link";
const CHARACTERS_LIST = gql`
  query {
    characters {
      results {
        id
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
      {data?.characters?.results?.map(({ name, image, id }) => (
        <li
          key={id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to={id}>
            <img
              src={image}
              alt={`${name}'s visual depiction`}
              width="200px"
              height="200px"
              style={{ border: "1px solid transparent", borderRadius: "6px" }}
            />
            <span style={{ marginTop: "0.6rem" }}>{name}</span>
          </Link>
        </li>
      ))}
    </CharactersGrid>
  );
}
export default Characters;

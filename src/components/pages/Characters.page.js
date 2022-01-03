import { InView } from "react-intersection-observer";
import CharactersGrid from "../CharactersGrid";
import { useQuery, gql } from "@apollo/client";

import Link from "../Link";
const CHARACTERS_LIST = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
      info {
        next
      }
    }
  }
`;

function Characters() {
  const { loading, error, data, fetchMore } = useQuery(CHARACTERS_LIST, {
    variables: { page: 1 },
  });
  const characters = loading || !data ? [] : data.characters.results;
  const hasNextPage = data?.characters?.info?.next;
  if (loading || !characters) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }
  const scrollEnd = () =>
    fetchMore({
      variables: {
        page: characters.length / 20 + 1,
      },
    });

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
      <InView
        onChange={(inView) => {
          if (inView && hasNextPage) {
            scrollEnd();
          }
        }}
      >
        {" "}
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {hasNextPage ? "Loading..." : "You just saw all characters."}
        </div>
      </InView>
    </div>
  );
}
export default Characters;

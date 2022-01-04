import { InView } from "react-intersection-observer";
import { useQuery, gql } from "@apollo/client";
import CharactersGrid from "../CharactersGrid";
import Flex from "../Flex";
import CharacterListCard from "../CharacterListCard";
import Loading from "../Loading";
import Error from "../Error";
export const CHARACTERS_LIST = gql`
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

function CharactersList() {
  const { loading, error, data, fetchMore } = useQuery(CHARACTERS_LIST, {
    variables: { page: 1 },
  });
  const characters = loading || !data ? [] : data.characters.results;
  const hasNextPage = data?.characters?.info?.next;
  const scrollEnd = () =>
    fetchMore({
      variables: {
        page: characters.length / 20 + 1,
      },
    });

  if (loading || !characters) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Flex direction="column" fullWidth>
      <CharactersGrid>
        {characters.map(({ name, image, id }) => (
          <CharacterListCard key={id} name={name} image={image} id={id} />
        ))}
      </CharactersGrid>
      <InView
        onChange={(inView) => {
          if (inView && hasNextPage) {
            scrollEnd();
          }
        }}
      >
        <Loading>
          {hasNextPage
            ? "Loading characters..."
            : "You just saw all characters."}
        </Loading>
      </InView>
    </Flex>
  );
}
export default CharactersList;

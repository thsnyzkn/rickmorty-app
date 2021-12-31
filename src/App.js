import "./App.css";
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
    <ul>
      {data?.characters?.results?.map(({ name, image }, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>{name}</span>
          <img src={image} alt={`${name}'s visual depiction`} />
        </li>
      ))}
    </ul>
  );
}
function App() {
  return (
    <div className="App">
      <Characters />
    </div>
  );
}

export default App;

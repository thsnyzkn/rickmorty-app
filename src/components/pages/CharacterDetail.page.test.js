import {
  fireEvent,
  render,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import CharacterDetail, { GET_CHARACTER } from "./CharacterDetail.page";
import characterDetailMock from "../../mocks/character-detail-mock.json";

const characterMock = {
  request: {
    query: GET_CHARACTER,
  },
  result: {
    data: characterDetailMock,
  },
};

const mockedProvider = ({ children }) => {
  return (
    <MockedProvider mocks={[characterMock]} addTypename={false}>
      <MemoryRouter>{children}</MemoryRouter>
    </MockedProvider>
  );
};
it("Prompt user with Loading text and then brings the detailed info for Morty Smith(id of 2)", async () => {
  render(<CharacterDetail />, {
    wrapper: mockedProvider,
  });
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  const charactarName = await screen.findByText(/Morty Smith/i);
  expect(charactarName).toBeInTheDocument();
  const characterLocation = await screen.findByText(/unknown/i);
  expect(characterLocation).toBeInTheDocument();
  const list = await screen.findByRole("list");
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  //Last 5 episodes
  expect(items.length).toBe(5);
  //first episode that is displayed
  expect(items[0].textContent).toEqual("Rickmurai Jack");
  //last episode that is displayed
  expect(items[items.length - 1].textContent).toEqual(
    "Rick & Morty's Thanksploitation Spectacular"
  );
});

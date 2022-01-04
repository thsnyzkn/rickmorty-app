import { render, screen, within } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import CharactersList, { CHARACTERS_LIST } from "./CharactersList.page";
import charactersListMock from "../../mocks/characters-list-mock.json";

const charactersMock = {
  request: {
    query: CHARACTERS_LIST,
    variables: { page: 1 },
  },
  result: {
    data: charactersListMock,
  },
};

const mockedProvider = ({ children }) => (
  <MockedProvider mocks={[charactersMock]} addTypename={false}>
    <MemoryRouter>{children}</MemoryRouter>
  </MockedProvider>
);
it("Prompt user with Loading text and then fetches first 20 characters", async () => {
  render(<CharactersList />, { wrapper: mockedProvider });
  mockAllIsIntersecting(true);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  const list = await screen.findByRole("list");
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(20);
});

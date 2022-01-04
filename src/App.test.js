import { within, render, screen, fireEvent } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";

import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import client from "./apolloClient";
import App from "./App";

test("renders first 20 characters", async () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  mockAllIsIntersecting(true);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
  const mainWrapper = await screen.findByRole("main");
  expect(mainWrapper).toBeInTheDocument();
  const list = await screen.findByRole("list");
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(20);
});

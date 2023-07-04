import { render, screen, waitFor } from "@testing-library/react";

import CardsSection from "./CardSection";
// import axios from "axios";
// configure({ asyncUtilTimeout: 500000 });

// jest.mock("axios");
// jest.setTimeout(30000);

test("renders App compoenent with child component", async () => {
  render(<CardsSection />);

  const cardList = await screen.findAllByTestId("cardsection");

  await waitFor(() => {
    expect(cardList).toHaveLength(3);
  });
});

test("renders overall card", async () => {
  render(<CardsSection />);
  const cardList = await screen.findAllByTestId("overallCard");

  await waitFor(() => {
    expect(cardList).toHaveLength(1);
  });
});

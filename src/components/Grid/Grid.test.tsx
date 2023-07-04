import { render, screen, waitFor } from "@testing-library/react";

import GridData from "./Grid";
// import axios from "axios";
// configure({ asyncUtilTimeout: 500000 });

// jest.mock("axios");
// jest.setTimeout(30000);

test("renders Grid Component", async () => {
  render(<GridData />);

  const GridList = await screen.findByRole("list");

  await waitFor(() => {
    expect(GridList).toBeInTheDocument();
  });
});

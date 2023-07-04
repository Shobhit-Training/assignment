import { render, screen, waitFor } from "@testing-library/react";
import { SelectBox } from "./SelectBox";

test("renders Select Box Component", async () => {
  render(<SelectBox />);

  const selectBox = await screen.findByRole("select");

  await waitFor(() => {
    expect(selectBox).toBeInTheDocument();
  });
});

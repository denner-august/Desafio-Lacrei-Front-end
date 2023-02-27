import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../src/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /boas vindas a lacrei saúde/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("verifica a quantidade de links", () => {
    render(<Home />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(6);
  });

  it("verifica quantidade de buttons", () => {
    render(<Home />);
    const button = screen.getAllByRole("button");

    expect(button).toHaveLength(2);
  });
});

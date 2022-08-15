import { render, screen } from "@testing-library/react";
import App from "./App";

// ver se vai renderizar os componentes Rotas e Global. Ou se tem.
describe("APP component", () => {
  test("Renders Rotas component", () => {
    render(<App />);
    const componentElement1 = screen.getByRole("Rotas");
    // .getByText(/learn react/i);
    expect(componentElement1).toBeInTheDocument();
  });
});

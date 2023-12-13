import { MantineProvider } from "@mantine/core";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import MovieContextProvider, { ProviderProps } from "../contexts/MovieContext";

// Wrapper för att ge context till alla tester, så vi slipper skriva det i varje test.
const TestWrapper = ({ children }: ProviderProps) => {
  return (
    <MantineProvider>
      <MovieContextProvider>{children}</MovieContextProvider>
    </MantineProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: TestWrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };

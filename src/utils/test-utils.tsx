import { MantineProvider } from "@mantine/core";
import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import MovieContextProvider from "../contexts/MovieContext";
import { theme } from "../mantineTheme";

// Wrapper för att ge context till alla tester, så vi slipper skriva det i varje test.
const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme}>
      <MovieContextProvider>{children}</MovieContextProvider>
    </MantineProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: TestWrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };

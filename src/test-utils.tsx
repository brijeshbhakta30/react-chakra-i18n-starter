import * as React from "react";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, RenderOptions } from "@testing-library/react";

// eslint-disable-next-line react/require-default-props
function AllProviders({ children }: { children?: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

// eslint-disable-next-line import/prefer-default-export
export { customRender as render };

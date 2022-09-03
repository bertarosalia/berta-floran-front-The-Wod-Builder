import { render } from "@testing-library/react";
import Wrapper from "./Wrapper";

const WrapperRender = (view: JSX.Element, ...options: any) =>
  render(view, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { WrapperRender };

import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../features/store/store";
import { BrowserRouter } from "react-router-dom";
import styledMainTheme from "../styledMainTheme";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <ThemeProvider theme={styledMainTheme}>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default Wrapper;

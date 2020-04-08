import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";

type Props = {
  store: any;
};

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: any) {
    console.log("com", Component);
    console.log("ctx", ctx);

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps: pageProps };
  }
  render() {
    console.log("props", this.props);
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
const makeStore = () => store;

export default withRedux(makeStore)(MyApp);

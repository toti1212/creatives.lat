import App from "../components/App.jsx";
import React from "react";
import ReactGA from "react-ga";

// Google Analytics initializer
if (process.env.REACT_APP_GTM_KEY) {
  ReactGA.initialize(process.env.REACT_APP_GTM_KEY);
}

class AppContainer extends React.Component {
  render() {
    return <App {...this.props} />;
  }
}
export default AppContainer;

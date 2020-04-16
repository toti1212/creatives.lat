import App from "../components/App.jsx";
import React from "react";
import TagManager from "react-gtm-module";

// Google Tag Manager initializer
if (process.env.REACT_APP_GTM_KEY) {
  const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_KEY
  };
  TagManager.initialize(tagManagerArgs);
}

class AppContainer extends React.Component {
  render() {
    return <App {...this.props} />;
  }
}
export default AppContainer;

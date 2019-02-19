import React from "react";
import PropTypes from "prop-types";
import { WebView } from "react-native";

class WebViews extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: "https://www.youtube.com/embed/NyantkXMUUY" }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default WebViews;

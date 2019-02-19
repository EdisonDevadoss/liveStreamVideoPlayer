import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import Video from "react-native-video";

class VideoComponent extends React.Component {
  renderVideo() {
    return (
      <Video
        source={{
          isNetwork: true,
          type: "",
          uri: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
        }}
        style={{ width: 800, height: 500 }}
        hls={true}
        muted={false}
        repeat={true}
        resizeMode="cover"
        volume={1.0}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
      />
    );
  }

  render() {
    return <View>{this.renderVideo()}</View>;
  }
}
{
  /*https://www.youtube.com/watch?v=NyantkXMUUY
Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});*/
}

export default VideoComponent;

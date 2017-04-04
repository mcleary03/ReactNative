import React from 'react';
import { View, Text } from 'react-native';

// props comes from the rederAlbums function in AlbumList.js
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;

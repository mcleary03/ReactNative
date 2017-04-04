import React from 'react';
import { Text } from 'react-native';
// wrapping this with Card styles
import Card from './Card';

// props comes from the rederAlbums function in AlbumList.js
const AlbumDetail = (props) => {
  // since we are passing Card this Text component,
  // we need to go tell Card how to render it.
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
};

export default AlbumDetail;

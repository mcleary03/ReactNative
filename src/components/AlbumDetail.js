import React from 'react';
import { Text } from 'react-native';
// wrapping this with Card styles
import Card from './Card';
// wrapping content with CardSection styles
import CardSection from './CardSection';

// props comes from the rederAlbums function in AlbumList.js
const AlbumDetail = (props) => {
  // since we are passing Card this Text component,
  // we need to go tell Card how to render it.
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;

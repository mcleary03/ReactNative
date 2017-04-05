import React from 'react';
import { Text, View, Image } from 'react-native';
// wrapping this with Card styles
import Card from './Card';
// wrapping content with CardSection styles
import CardSection from './CardSection';

// props comes from the rederAlbums function in AlbumList.js, we can use all data in props this way.
// const AlbumDetail = (props) => {
  // I destructured props because we are only ever using
  //  props.album below.
  // const AlbumDetail = ({ album }) => {
    // I could also do it like this to destructure further:
        // const AlbumDetail = ({ album: { title, artist, thumbnail_image } }) => {
  // But the best way to destructure this much is inside the body:
  const AlbumDetail = ({ album }) => {
    // The recommended way to destructure props:
    const { title, artist, thumbnail_image } = album;
    // We can also destructure the styles:
    const { thumbnailStyle, headerContentStyle } = styles;
  // since we are passing Card this Text component,
  // we need to go tell Card how to render it.
  return (
    <Card>
      <CardSection>
        <View>
          {/* Images in RN do not resize automatically
            we have to specify exactly what size to render */}
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  }
};

export default AlbumDetail;

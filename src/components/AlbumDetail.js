import React from 'react';
import { Text, View, Image } from 'react-native';
// wrapping this with Card styles
import Card from './Card';
// wrapping content with CardSection styles
import CardSection from './CardSection';
import Button from './Button';

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
    const { title, artist, thumbnail_image, image } = album;
    // We can also destructure the styles:
    const {
      thumbnailStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle
    } = styles;
  // since we are passing Card this Text component,
  // we need to go tell Card how to render it.
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          {/* Images in RN do not resize automatically
            we have to specify exactly what size to render */}
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        {/* Adding prop of onPress (this is an arbitrary name, not the built in method) */}
        <Button onPress={() => console.log(title)} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    // heres a trick to make the image take up the full width
    //  of the screen without the need to calculate the actual width:
    flex: 1,
    width: null
  }
};

export default AlbumDetail;

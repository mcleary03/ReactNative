// Import all of React, and Component from React
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// refactored from functional to class component
// necessary to make http requests
class AlbumList extends Component {
  // classes must return a render method
  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;

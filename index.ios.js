// Import a library to help create a Component
import React from 'react';
// Only the 'root' component uses 'AppRegistry'
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'

// Create a Component
const App = () => (
  // Only one top level tag can be returned here so,
  //  All components will be nested inside this View tag

  // headerText is passed into the header component with the string 'Albums' to be displayed
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

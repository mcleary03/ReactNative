// Import a library to help create a Component
import React from 'react';
// Only the 'root' component uses 'AppRegistry'
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => (
  // headerText is passed into the header component with the string 'Albums' to be displayed
  <Header headerText={'Albums'} />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

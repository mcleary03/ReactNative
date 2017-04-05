// Import all of React, and Component from React
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


// refactored from functional to class component
// necessary to make http requests
class AlbumList extends Component {
  // define initial state of component
  state = { albums: [] };
  // this life-cycle method tells the app to make http
  //  (Ajax) request when this component loads
  // also, need to install axios in order to make the request
  componentWillMount() {
    // call axios to get the data which returns a promise
    // add .then to it to use the response(promise)
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  // map function return JSX containing the title of each album
  renderAlbums() {
    return this.state.albums.map(album =>
      // key is needed to be unique and consistant
      // across re-renders, normally an id associated
      // with the data element.
      // album={album} is passing down the album variable from above
      //  and giving the AlbumDetail a prop of whatever.album so now
      //  the AlbumDetail can use all the album data inside itself.
      <AlbumDetail key={album.title} album={album} />
    );
  }

  // classes must return a render method
  render() {
    // using the map function above, we will render
    //  each album from the list inside this component
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;

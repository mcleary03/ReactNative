// This button is designed to be reusable for any purpose

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// This is how we pass the onPress functionality down to
//  the button when the user presses it. This is the actual onpress method.
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    // onPress is just connecting to what we called 'onPress' in the AlbumList.
    // So this now does whatever we define a button to do
    //  where it is placed using the 'onPress' prop.
    // The format here is ->  method={prop}
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    // stretch to fill limits of this container:
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;

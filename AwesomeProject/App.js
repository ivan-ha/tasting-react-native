import React, {Component} from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

class MyImage extends Component {
  render() {
    let pic = {
      uri: this.props.uri
    };
    return (
      <Image source={pic} style={styles.image}/>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <MyImage uri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
        <MyImage uri="http://blog.iconfinder.com/wp-content/uploads/2014/04/cat_grumpy_orig.png" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 193,
    height: 110
  }
});

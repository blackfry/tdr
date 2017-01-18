/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';

export default class DailyPlanet extends Component {

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => alert(err));
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.cameraContainer}>
          <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}>
            <TouchableHighlight onPress={() => this.takePicture()}>
              <View style={{ height:50, width:50,backgroundColor:'pink'}}></View>

            </TouchableHighlight>
          </Camera>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  cameraContainer: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('DailyPlanet', () => DailyPlanet);

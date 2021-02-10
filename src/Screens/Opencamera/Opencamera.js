import React, {Component} from 'react';
import {View, Text, TouchableOpacity, AsyncStorage} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import {RNCamera} from 'react-native-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default class Opencamera extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      // AsyncStorage.setItem('img', data.uri);
      // AsyncStorage.setItem('phneuri', response.uri);
      if (data.uri) {
        this.props.navigation.push('Add Review', {imageuri: data.uri});
      } else return;
      console.log(data.uri);
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode="off"
          captureAudio={false}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          // androidRecordAudioPermissionOptions={{
          //   title: 'Permission to use audio recording',
          //   message: 'We need your permission to use your audio',
          //   buttonPositive: 'Ok',
          //   buttonNegative: 'Cancel',
          // }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            //   console.warn(barcodes[0].data);
            // if (!Utils.isNull(barcodes[0].data) & this.isCan) {
            //   this.runAction(barcodes[0].data)
            // }
          }}>
          <TouchableOpacity
            style={{marginBottom: '10%'}}
            onPress={this.takePicture}>
            <MaterialIcons name="camera" color="white" size={50} />
          </TouchableOpacity>
        </RNCamera>
      </View>
    );
  }
}

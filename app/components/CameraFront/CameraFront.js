import React, { PropTypes, Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { connect } from 'react-redux'
import Camera from 'react-native-camera'
import { Button } from '@shoutem/ui'
import { getImageFront } from '~/redux/modules/camera'

class CameraFront extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		navigator: PropTypes.object.isRequired
	}
	render() {
	    return (
	      <View style={styles.container}>
	        <Camera
	          ref={(cam) => {
	            this.camera = cam;
	          }}
	          style={styles.preview}
	          aspect={Camera.constants.Aspect.fill}
	          captureTarget={Camera.constants.CaptureTarget.disk}
	          >
	          <Button style={{marginBottom: 40, height: 50, padding: 10}} onPress={this.takePicture.bind(this)}>
	          	<Text style={{textAlign: 'center'}}>Take Image</Text>
	          </Button>
	        </Camera>
	      </View>
	    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => {
      	this.props.dispatch(getImageFront(data.path))
      	// Push to Preview component
    	this.props.navigator.push({
    		previewFront: true
    	})
      })
      .catch(err => console.error(err));
  }
}

export default connect()(CameraFront)

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 40
  }
});
import React, { PropTypes, Component } from 'react'
import { Navigator } from 'react-native'
import { Splash, CameraFront } from '~/components'
import { PreviewFrontContainer } from '~/containers'

export default class SnappNavigator extends Component {
	static propTypes = {
		isAuthed: PropTypes.bool.isRequired
	}
	renderScene = (route, navigator) => {
		if (this.props.isAuthed === false) {
			return <Splash navigator={navigator} />
		} else if (this.props.isAuthed === true && route.previewFront !== true) {
			return <CameraFront navigator={navigator} />
		} else if (route.previewFront === true) {
			return <PreviewFrontContainer navigator={navigator} />
		}
	}
	configureScene = (route) => {
		return Navigator.SceneConfigs.PushFromRight
	}
	render () {
		return (
			<Navigator 
				initialRoute={{}}
				renderScene={this.renderScene}
				configureScene={this.configureScene}
			/>
		)
	}
}
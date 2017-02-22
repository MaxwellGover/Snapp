import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { PreviewFront } from '~/components'
import { removeImageFront } from '~/redux/modules/camera'

class PreviewFrontContainer extends Component {
	static propTypes = {
		imageFront: PropTypes.string.isRequired,
		dispatch: PropTypes.func.isRequired,
		navigator: PropTypes.object.isRequired
	}
	removeImage = () => {
		this.props.dispatch(removeImageFront())
		console.log('Navigate back to front camera')
	}
	render () {
		console.log(this.props)
		return (
			<View style={{flex: 1}}>
				<PreviewFront 
					imageFront={this.props.imageFront}
					removeImage={this.removeImage}/>
			</View>
		)
	}
}


function mapStateToProps ({ camera }) {
	return {
		imageFront: camera.imageFront
	}
}

export default connect(mapStateToProps)(PreviewFrontContainer)

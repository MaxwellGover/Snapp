import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { PreviewFront } from '~/components'

class PreviewFrontContainer extends Component {
	static propTypes = {
		imageFront: PropTypes.string.isRequired
	}
	render () {
		console.log(this.props)
		return (
			<View style={{flex: 1}}>
				<PreviewFront imageFront={this.props.imageFront}/>
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

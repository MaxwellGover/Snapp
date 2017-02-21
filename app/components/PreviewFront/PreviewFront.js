import React, { PropTypes } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function PreviewFront (props) {
	
	PreviewFront.propTypes = {
		imageFront: PropTypes.string.isRequired
	}

	return (
		<View>
			<Text>
				Preview
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({

})
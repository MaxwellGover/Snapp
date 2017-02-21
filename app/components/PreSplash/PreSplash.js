import React, { PropTypes } from 'react'
import { View, StyleSheet, Image } from 'react-native'

PreSplash.propTypes = {

}

export default function PreSplash (props) {
	return (
		<View style={styles.container}>
			<Image 
				style={styles.image}
				source={require('../../images/logo.png')}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		resizeMode: 'contain',
		height: 80
	}
})
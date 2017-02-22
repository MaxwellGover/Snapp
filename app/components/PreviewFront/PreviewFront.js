import React, { PropTypes } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Icon, Overlay } from '@shoutem/ui'

export default function PreviewFront (props) {
	
	PreviewFront.propTypes = {
		imageFront: PropTypes.string.isRequired,
		removeImage: PropTypes.func.isRequired
	}

	return (
		<View style={styles.container}>
			<Image 
				style={styles.image}
				source={{uri: props.imageFront, isStatic: true}}
			/>
			<Overlay styleName="fill-parent" style={{backgroundColor: 'transparent'}}>
				<View style={styles.overlay}>
					<Icon name="close" 
						  style={{marginRight: 20, fontSize: 30, color: 'red'}}
						  onPress={props.removeImage}/>
					<Icon name="like" 
						style={{fontSize: 30, color: 'green'}}/>
				</View>
			</Overlay>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {
		flex: 1
	},
	overlay: {
		flexDirection: 'row'
	},
	deleteIcon: {
		marginRight: 10,
		color: 'red'
	},
	confirmIcon: {
		color: 'green'
	}
})
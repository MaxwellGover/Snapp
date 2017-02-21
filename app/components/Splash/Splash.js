import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { TextInput, Button } from '@shoutem/ui'
import { firebaseAuth } from '~/config/constants'
import { isAuthed, notAuthed } from '~/redux/modules/authentication'

const { height } = Dimensions.get('window')

class Splash extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired
	}
	state = {
		email: '',
		password: ''
	}
	loginUser = () => {
	
		// Get email and password from user input
		
		let email = this.state.email
		let password = this.state.password

		// Sign in user with firebase 
		
		firebaseAuth.signInWithEmailAndPassword(email, password).catch(error => {
            
            // Handle Errors here
            
            var errorCode = error.code;
            var errorMessage = error.message;

            console.warn('Error in login: ', error.message);

            // Alert user of login error

            Alert.alert(
            	'Login failed',
            	'Make sure you have a retailer account first',
            	[
    				{text: 'OK', onPress: () => console.log('OK Pressed')}
    			]
            )
            
            // Dispatch notAuthed
            
            this.props.dispatch(notAuthed());
            return; 
            // ...
        }).then (() => {
        	
        	// Get logged in user's uid

        	let uid = firebaseAuth.currentUser.uid;
        	
        	// Dispatch isAuthed and go to <CameraFront /> component
        	
        	this.props.dispatch(isAuthed(uid));
        	
        	console.log("Auth successful")   
        });
	}
	render () {
		return (
			<View style={styles.container}>
				<View>
					<Image 
						style={styles.image}
						source={require('../../images/splash.png')}
					/>
				</View>
				<View style={styles.loginContainer}>
					<TextInput 
						placeholder={'Enter email'}
						autoCapitalize='none'
						autoCorrect={false}
						autoFocus={true}
						keyboardType='email-address'
						onChangeText={(email) => this.setState({email})}
					/>
					<TextInput 
						placeholder={'Enter password'}
						secureTextEntry
						autoCapitalize='none'
						autoCorrect={false}
						onChangeText={(password) => this.setState({password})}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Button 
						style={{
							height: 60,
							marginBottom: 15,
							backgroundColor: '#000'
						}}
						onPress={this.loginUser}>
						<Text style={styles.loginText}>Login</Text>
					</Button>
					<Text style={styles.helpText}>* Login with your retailer information</Text>	
				</View>
			</View>
		)
	}
}

// Get dispatch function 

export default connect()(Splash)


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingTop: 50,
		paddingBottom: 40
	},
	image: {
		height: height * .4 > 300 ? 300 : height * .4,
		resizeMode: 'contain',
		alignSelf: 'center',
		height: 80
	},
	loginContainer: {
		padding: 20
	},
	buttonContainer: {
		padding: 20
	},
	loginText: {
		fontSize: 20,
		color: '#fff'
	},
	helpText: {
		textAlign: 'center'
	}
})
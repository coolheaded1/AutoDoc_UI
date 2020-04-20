import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	ScrollView,
    Image
} from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			myState: 'Hello! This is first react-nativehajdhajh app. I hope you like it',
			names: [
				{
					id: 0,
					name: 'Samuel'
				},
				{
					id: 1,
					name: 'Joseph'
				},
				{
					id: 2,
					name: 'Monday'
				}
			],
			email: '',
			password: '',
		}
    }
    handleEmail =  (newEmail) => {
		this.setState({
			email: newEmail
		})
	}

	handlePassword =  (newPassword) => {
		this.setState({
			password: newPassword
		})
	}

	login = (email, pass) => {
		alert('email: ' + email + ' password: ' + pass)
	}

	updateState = () => {
		this.setState({
			myState: 'My state is being changed'
		});
	}

	giveAlert = () => {
		alert('welcome');
	}

	alertItemName = (item) => {
		alert(item.name);
	}
    render() {
        return (
            <ScrollView>
                <View style={styles.newStyle}>
                    <Text onPress={this.updateState}>{this.state.myState}</Text>
                </View>
                <TouchableOpacity style={styles.hover}>
                    <Text onPress={this.giveAlert}>Hello everyone!</Text>
                </TouchableOpacity>
                {
                    this.state.names.map((item) => {
                        return (
                            <TouchableOpacity
                            style={styles.hover}
                            key={item.id}
                            onPress={() => this.alertItemName(item)}
                            >
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }

                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleEmail}
                />
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handlePassword}
                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                    () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

                
                <View>
                    <View style={styles.redbox}></View>
                    <View style={styles.bluebox}></View>
                    <View style={styles.blackbox}></View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  newStyle: {
  	backgroundColor: 'red',
	marginBottom: 10
  },
  redbox: {
	width: 100,
	height: 100,
	backgroundColor: 'red'
  },
   bluebox: {
	width: 100,
	height: 100,
	backgroundColor: 'blue'
  },
   blackbox: {
	width: 100,
	height: 100,
	backgroundColor: 'black'
  },
  hover: {
	  padding: 20,
	  backgroundColor: 'green',
	  marginBottom: 10
  },
  input: {
		margin: 15,
		height: 40,
		borderColor: '#7a42f4',
		borderWidth: 1,
		paddingLeft: 10,
		color: '#7a42f4'
	},

	submitButton: {
		borderColor: '#7a42f4',
		padding: 10,
		backgroundColor: '#7a42f4',
		margin: 15,
		alignItems: 'center',
	},

	submitButtonText: {
		color: '#fff',
		textTransform: 'uppercase'
	}
});

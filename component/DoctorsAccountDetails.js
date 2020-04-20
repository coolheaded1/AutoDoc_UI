import React from 'react';
import { StyleSheet, View, Alert, Text, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';

export default class DoctorsAccountDetails extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.head}>
                        <Text style={styles.text}>AutoDoc</Text>
                        <Image source={require('../assets/doctor_1.png')} style={{width: 100, height: 100, marginTop: 20, marginBottom: 70}} />

                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Text style={{color: '#1c75bc'}}>Login</Text>
                            </TouchableOpacity>
                            <View style={{paddingLeft: 150}}></View>
                            <TouchableOpacity style={styles.tab}>
                                <Text style={{color: '#fff'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={{color: '#fff', marginBottom: 20}}> Account Details </Text>
                        <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Bank Name"
                            placeholderTextColor = "#fff"
                            autoCapitalize = "none"
                        />

                        <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Account Name"
                            placeholderTextColor = "#fff"
                            autoCapitalize = "none"
                        />

                        <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Account Number"
                            placeholderTextColor = "#fff"
                            autoCapitalize = "none"
                        />

                        <TouchableOpacity style = {styles.loginButton}>
                            <Text style={{color: '#fff'}} >Submit </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{color: '#fff'}} > Back to personal details </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#1c75bc'
    },
    head: {
        backgroundColor: '#fff',
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    tab: {
        backgroundColor: '#1c75bc',
        padding: 7,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    formContainer: {
        backgroundColor: '#1c75bc',
        width: '100%',
        paddingTop: 40,
        alignItems: 'center',
        paddingBottom: 40,
        display: 'flex'
    },
    input: {
  		margin: 15,
  		height: 40,
  		borderColor: 'rgba(255, 255, 255, 0.51)',
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
  		borderWidth: 1,
  		paddingLeft: 10,
        width: '90%',
  		color: '#fff'
  	},
    loginButton: {
		borderColor: '#1c75bc',
		padding: 10,
		backgroundColor: '#1c75bc',
		alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 70,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 10,
        marginBottom: 30
	},
    text: {
        color: '#1c75bc',
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'Roboto',
        fontStyle: 'normal'
    },

})

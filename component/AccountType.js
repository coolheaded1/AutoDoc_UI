import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

export default class AccountType extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>AutoDoc</Text>
                <Text style={styles.choose}>Choose your Account Type </Text>
                <View style={{ flexDirection: 'row', marginTop: 80, marginBottom: 60}}>

                    <Image
                        source={require('../assets/OBJECTS.png')}
                        style={styles.imageSize}
                    />
                    <View style={{paddingLeft: 80}}></View>

                    <Image
                        source={require('../assets/doctor_1.png')}
                        style={styles.imageSize}
                    />

                </View>
                <TouchableOpacity style = {styles.submitButton}>
                    <Text style={{color: '#fff'}} > Log In </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.submitButton}>
                    <Text style={{color: '#fff'}} > Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        width: '100%',
        height: '100%',
    },
    submitButton: {
		borderColor: '#1c75bc',
		padding: 10,
		backgroundColor: '#1c75bc',
		alignItems: 'center',
        width: '80%',
        marginBottom: 30,
        borderRadius: 5
	},
    text: {
        color: '#1c75bc',
        fontWeight: 'bold',
        fontSize: 32,
        fontFamily: 'Roboto',
        fontStyle: 'normal'
    },
    choose: {
        position: 'relative',
        marginTop: 60,
        color: '#1c75bc',
        fontSize: 18
    },
    imageSize: {
        width: 70,
        height: 90,
        marginBottom: 10,
    }
})

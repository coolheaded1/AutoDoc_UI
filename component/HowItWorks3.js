import React from 'react';
import { StyleSheet, ScrollView, View, Alert, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';

export default class DoctorsLogin extends React.Component {
    constructor(props) {
        super(props);

    }
    signUpTab = (e) => {
        Alert.alert('This works');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image source={require('../assets/connect_doctor.png')} style={{width: '100%', height: 200, marginBottom: 50}} />
                    <Text style={styles.text}>Connect with a Doctor</Text>
                    <Text>Get quality and satisfactory services and care from expertise in several Medical disciplines as you schedule a session with a recommended Doctor.</Text>
                    <View style={{flexDirection: 'row', marginTop: 30}}>
                        <View style={styles.indicator}></View>
                        <View style={styles.indicator}></View>
                        <View style={{
                            backgroundColor: '#1c75bc',
                            width: 70,
                            borderRadius: 10,
                            marginLeft: 2}}>
                        </View>

                    </View>
                </View>


                <View style={styles.row}>
                    <TouchableOpacity style={styles.tab}>
                        <Text style={{color: '#fff'}}>Finish </Text>
                    </TouchableOpacity>
                    <View style={{paddingLeft: 130}}></View>
                    <TouchableOpacity style={styles.tab}>
                        <Text style={{color: '#fff'}}>Sign up </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#1c75bc',
        height: '100%',
    },
    box: {
        backgroundColor: '#fff',
        bottom: 0,
        width: '100%',
        padding: 30,
        paddingTop: 40,
        alignItems: 'center',
    },
    indicator: {
        width: 30,
        borderRadius: 10,
        backgroundColor: 'grey',
        height: 4,
        marginLeft: 2
    },
    text: {
        color: '#1c75bc',
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    row:{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tab: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 7,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#1c75bc',
        marginBottom: 20,
        borderRadius: 7
    }
})

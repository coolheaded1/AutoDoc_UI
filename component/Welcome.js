import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image 
                    source={require('../assets/autodoc_vector.png')}
                    style={styles.imageSize}
                />
                </View>


                <View style={styles.bottom}>
                <View style={{padding: 25}}>
                    <Text style={styles.text}>from</Text>
                </View>
                    <Text style={styles.text}>Duncan Inc</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c75bc',
        width: '100%',
        height: '100%'
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c75bc',
        width: '100%',
        height: '100%'
    },
    imageSize: {
        width: 100,
        height: 100,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 20
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
    }
})

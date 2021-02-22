import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Button, Text } from 'native-base';
import auth from "@react-native-firebase/auth"

export default function ForgotPassword ({navigation}) {

    const [email, setEmail] = useState('');

    const resetMail = (email) => {
        auth()
        .sendPasswordResetEmail(email)
        .then(() => {
            navigation.navigate('LogIn')
        })
    };

    return (
        <View >
            <TextInput
                style={styles.input}
                placeholder='Your Email'
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                title="Reset"
                onPress={() => resetMail(email)} 
            >
                <Text style={styles.buttonTitle}>Send</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
});

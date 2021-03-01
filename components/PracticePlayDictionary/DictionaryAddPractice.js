import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import { firebase } from '@react-native-firebase/app'
import database from '@react-native-firebase/database';

export default DictionaryMainPage = ({navigation}) => {
  
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const user = firebase.auth().currentUser;
    

    const onSubmitPress = () => {
        database()
            .ref(`/${user.uid}/PracticeDictionary`)
            .push({
                title: title,
                description: description,
            })
            .then(() => {
                alert("Trening was added!")
            })
            .then(() => {
                navigation.navigate('DictionaryMainPage')
            })
    }
    
    return (    
        <View>
            <TextInput
                style={styles.input}
                placeholder='Title'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setTitle(text)}
                value={title}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder='Description'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setDescription(text)}
                value={description}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                multiline={true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onSubmitPress()}>
                <Text style={styles.buttonTitle}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
  }

const styles = StyleSheet.create({
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
    }
});
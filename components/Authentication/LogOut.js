import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'native-base';

import auth from '@react-native-firebase/auth';

export default function LogOut () {

const navigation = useNavigation();

const onLogOutPress = () => {
    auth()
    .signOut()
    .then(() => {
        navigation.navigate('LogIn')
    })
}

    return (
        <Button onPress={onLogOutPress}>
            <Text>Log Out</Text>
        </Button>
    )
};
  

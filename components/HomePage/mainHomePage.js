import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from "react-native"
import { Button, Text } from 'native-base';
import LogOut from '../Authentication/LogOut';

export default MainHomePage = () => {
    
    const navigation = useNavigation();

return (
  <View>
    <Button onPress={() => navigation.navigate("MainCalendarPage")}>
        <Text>My Practices</Text>
    </Button>
    <Button>
        <Text>Notes</Text>
    </Button>
    <Button onPress={() => navigation.navigate("DictionaryMainPage")}>
        <Text>Practice Play Dictionary</Text>
    </Button>
    <LogOut />
  </View>

);
}
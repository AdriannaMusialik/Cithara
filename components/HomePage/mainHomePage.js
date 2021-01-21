import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from "react-native"
import { Button, Text } from 'native-base';

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
        <Button>
            <Text>Exercises</Text>
        </Button>
      </View>
    );
  }
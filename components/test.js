import React from 'react';
import {View } from 'react-native';
import {Button, Text} from 'native-base';

const Test = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Test, test, test !!!!
      </Text >
      <Button>
        <Text >TEST2</Text>
      </Button>
      
    </View>
  );
}

export default Test;
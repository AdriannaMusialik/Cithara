import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import {Button, Text} from 'native-base';

export default DictionaryMainPage = () => {

  const navigation = useNavigation();
  
  return (    
      <View>
          <Text>Title:</Text>
          <Text>Description:</Text>
          <Button rounded onPress={() => navigation.navigate("DictionaryAddPractice")}>
              <Text>+</Text>
          </Button>
      </View>
  );
}
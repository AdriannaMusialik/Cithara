import React, { useState, useEffect } from 'react';
import { firebase } from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

import { View, StyleSheet } from 'react-native';
import {Button, Text} from 'native-base';

export default DictionaryMainPage = ({navigation}) => {

    const [practiceDictionaryData, setData] = useState([]);

    const user = firebase.auth().currentUser;

    useEffect(() => {
        database()
            .ref(`/${user.uid}/PracticeDictionary`)
            .on('value', querySnapShot => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let practiceDictionaryData = {...data};
                setData(practiceDictionaryData);
              });
     })


   
  return (    
      <View>
          {Object.keys(practiceDictionaryData).map(key => 
            <View key={key}>
                <Text >Title: {practiceDictionaryData[key].title}</Text>
                <Text>Description: {practiceDictionaryData[key].description}</Text>
            </View>
          )}

          <Button rounded onPress={() => navigation.navigate("DictionaryAddPractice")}>
              <Text>+</Text>
          </Button>
      </View>
  );
}


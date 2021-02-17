import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import { Button, Text } from 'native-base';

const SingleDay = ({day, date}) => {

  let singleDate = new Date(date).getDay();
  let todaysDate = new Date().getDay()

  const navigation = useNavigation();

  return (
    
        <View style={singleDate  === todaysDate ? styles.singleDayRed : styles.singleDay}>
        { singleDate  === todaysDate
          ?
            <>
              <View style={styles.row}>
                <Text>{date}</Text>
                <Text style={styles.day}>{day}</Text>
              </View>
              <View style={styles.row}>
                <Button rounded success onPress={() => navigation.navigate("AddPractice")} date={date} day={day}>
                  <Text>+</Text>
                </Button>
              </View>
            </>
          :
            <>
              <View style={styles.row}>
                <Text>Title</Text>
                <Text>{date}</Text>
                <Text style={styles.day}>{day}</Text>
              </View>
              <View style={styles.row}>
                <Text>Starting time</Text>
                <Text>Number of exercises</Text>
                <Text>Time of exercises </Text>  
              </View>
            </>
        }
        </View> 
  );
}

const styles = StyleSheet.create({
    singleDay: {
      flex: 1,
      justifyContent: "space-around",
      borderWidth: 1,
      borderColor: "black",
      margin: 10
    },

    singleDayRed: {
      flex: 1,
      justifyContent: "space-around",
      borderWidth: 1,
      borderColor: "red",
      margin: 10
    },

    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
});

export default SingleDay;
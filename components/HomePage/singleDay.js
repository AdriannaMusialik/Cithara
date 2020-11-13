import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const SingleDay = ({day, date}) => {

  return (
      <View style={styles.singleDay}>
        <View style={styles.row}>
          <Text style={styles.day}>{day}</Text>
          <Text>{date}</Text>
        </View>
        <View style={styles.row}>
          <Text>Number of exercises</Text>
          <Text>Time of exercises</Text>
        </View>
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

    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
});

export default SingleDay;
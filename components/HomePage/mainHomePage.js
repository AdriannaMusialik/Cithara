import React from 'react';
import {View, StyleSheet} from 'react-native';

import SingleDay from './singleDay';
import Logout from "../Logout"

const MainHomePage = () => {
  
  let curr = new Date; 
  let week = [];

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i 
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
    week.push(day)
  }

  let weekDetails = [
    {dayName: "Monday", date: week[0], id: 1},
    {dayName: "Tuesday", date: week[1], id: 2},
    {dayName: "Thursday", date: week[2], id: 3},
    {dayName: "Wednesday", date: week[3], id: 4},
    {dayName: "Friday", date: week[4], id: 5},
    {dayName: "Saturday", date: week[5], id: 6},
    {dayName: "Sunday", date: week[6], id: 7}
  ];

  return (
    <>
      <View style={styles.weekDetails}>
        {weekDetails.map(day => <SingleDay day={day.dayName} date={day.date} key={day.id} />)}
        <Logout />
      </View>

      
    </>
  );
}

const styles = StyleSheet.create({
  weekDetails: {
    flex: 1,
    justifyContent: "space-around",
  }
});

export default MainHomePage;
import React from 'react';
import {View, StyleSheet} from 'react-native';
import SingleDay from './singleDay';

const MainHomePage = () => {
  
  let curr = new Date; 
  let week = [];

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i 
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
    week.push(day)
  }

  let daysNames = [
    {dayName: "Monday", date: week[0]},
    {dayName: "Tuesday", date: week[1]},
    {dayName: "Thursday", date: week[2]},
    {dayName: "Wednesday", date: week[3]},
    {dayName: "Friday", date: week[4]},
    {dayName: "Saturday", date: week[5]},
    {dayName: "Sunday", date: week[6]}
  ];

  return (
    <>
      <View style={styles.daysNames}>
        {daysNames.map(day => <SingleDay day={day.dayName} date={day.date}/>)}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  daysNames: {
    flex: 1,
    justifyContent: "space-around",
  }
});

export default MainHomePage;
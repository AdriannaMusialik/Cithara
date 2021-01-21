import React, { Component } from 'react';
import { Text,View, TouchableHighlight } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import TimePicker from 'react-native-simple-time-picker';
 
export default class Timer1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      totalDuration: 90000,
      timerReset: false,
      selectedHours: 0,
      selectedMinutes: 0,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
 
  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }
 
  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }
  
  getFormattedTime(time) {
      this.currentTime = time;
  };
 
  render() {
    const { selectedHours, selectedMinutes } = this.state;
    return (
      <View>
        <Text>{selectedHours}:{selectedMinutes}</Text>
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
        />
        <Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
          reset={this.state.timerReset}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime} />
        <TouchableHighlight onPress={this.toggleTimer}>
          <Text>{!this.state.timerStart ? "Start" : "Stop"}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetTimer}>
          <Text>Reset</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
 
const handleTimerComplete = () => alert("custom completion function");
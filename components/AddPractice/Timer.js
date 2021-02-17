import React, { Component } from 'react';
import { Text,View, TouchableHighlight } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';

export default class Timer1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      totalDuration: 80000,
      timerReset: false,
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
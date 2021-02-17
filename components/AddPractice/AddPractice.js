import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TreningPicker from './TreningPicker';
import { TimePicker }  from "./TimePicker"
import { Button, Text } from 'native-base';

export default class AddPractice extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedPractice: undefined,
      fieldCount: 0
    };
  }
  
  handleOnValueChange = (value) => {
    this.setState({
      selectedPractice: value
    });
  };
 
 addComponent = () => {
   this.setState({
     fieldCount: this.state.fieldCount + 1,
    })
 }
 
  render() {
    var childs= [];
 
    for (let i = 0; i < this.state.fieldCount; i++) {
       childs.push(<TreningPicker onValueChange={() => this.handleOnValueChange} selectedPractice={this.state.selectedPractice} />)
    }
    return (    
      <View>
        <View >
          <Text>Start time:</Text> 
          <TimePicker />
        </View>
        <View >
          <TreningPicker onValueChange={() => this.handleOnValueChange} selectedPractice={this.state.selectedPractice} />
        </View>
          {childs}
          <Button rounded success onPress={this.addComponent} >
                <Text>+</Text>
          </Button>

      </View>
    );
  }
}
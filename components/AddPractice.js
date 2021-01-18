import React, { Component }  from 'react';
import { View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class AddPractice extends Component {
  state = {
    language: "",
  };

  render() {
    return (
      <View>
        <Picker 
          selectedValue={this.state.language}
          style={{height: 50, width: 300}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="C++" value="c++" />
        </Picker>
      </View> 

    );
  }
};


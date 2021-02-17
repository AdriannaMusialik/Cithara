import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import {Form, Picker} from 'native-base';
import { TimePicker }  from "./TimePicker"

export default class TreningPicker extends Component {

    render () {
        return (
            <View style={styles.traningPicker_contener}>
                <Form style={styles.traningPicker_picker}>
                    <Picker 
                        mode="dropdown"
                        placeholder="Select One"
                        placeholderStyle={{ color: "#2874F0" }}
                        note={false}
                        selectedValue={this.props.selectedPractice}
                        onValueChange={this.props.onValueChange()}
                    >
                        <Picker.Item label="Trening1" value="key0" />
                        <Picker.Item label="Trening2" value="key1" />
                        <Picker.Item label="Trening3" value="key2" />
                        <Picker.Item label="Trening4" value="key3" />
                    </Picker>
                </Form>
                <TimePicker />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    traningPicker_contener: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 20,
        width: 200
    },
    traningPicker_picker: {
        flex: 1,
    },
    traningPicker_timePicker: {
        flex: 2,
    },
   
  });
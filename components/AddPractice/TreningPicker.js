import React, { Component } from 'react';
import {Form, Picker} from 'native-base';

export default class TreningPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: undefined
        };
      }
      onValueChange(value) {
        this.setState({
          selected: value
        });
      }

    render () {
        return (
            <Form>
                <Picker
                    mode="dropdown"
                    placeholder="Select One"
                    placeholderStyle={{ color: "#2874F0" }}
                    note={false}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                >
                    <Picker.Item label="Trening1" value="key0" />
                    <Picker.Item label="Trening2" value="key1" />
                    <Picker.Item label="Trening3" value="key2" />
                    <Picker.Item label="Trening4" value="key3" />
                </Picker>
            </Form>
        );
    }
}
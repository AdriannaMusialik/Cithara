import React, { Component } from 'react';
import {Form, Picker} from 'native-base';

export default class TreningPicker extends Component {

    render () {
        return (
            <Form>
                <Picker
                    mode="dropdown"
                    placeholder="Select One"
                    placeholderStyle={{ color: "#2874F0" }}
                    note={false}
                    selectedValue={this.props.selected}
                    onValueChange={this.props.onValueChange()}
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
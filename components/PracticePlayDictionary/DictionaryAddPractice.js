import React, { Component } from 'react';
import { View } from 'react-native';
import { Item, Input, Textarea, Form, Button, Text} from 'native-base';

export default class DictionaryMainPage extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
      
//     };
//   }

  render() {
    return (    
        <View>
            <Item >
                <Input placeholder="Title" />
            </Item>
            <Form rounded>
                <Textarea rounded rowSpan={5} bordered placeholder="Description" />
            </Form>
            <Button rounded>
                <Text>Add</Text>
            </Button>
        </View>
    );
  }
}
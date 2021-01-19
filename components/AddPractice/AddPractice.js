import React, { Component } from 'react';
import { Container, Header, Content, Form, Picker} from 'native-base';
import TreningPicker from './TreningPicker';

export default class AddPractice extends Component {
  
  render() {
    return (
      <Container>
          <TreningPicker />
          
      </Container>
    );
  }
}
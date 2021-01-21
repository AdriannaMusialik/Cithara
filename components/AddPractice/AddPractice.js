import React, { Component } from 'react';
import { Container, Text} from 'native-base';
import TreningPicker from './TreningPicker';
import Stopwatch1 from "./Stopwatch"
import Timer1 from "./Timer"

export default class AddPractice extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  
  handleOnValueChange = (value) => {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container>
          <TreningPicker onValueChange={() => this.handleOnValueChange} selected={this.state.selected}/>
          {this.state.selected != undefined &&
            <>
              <Stopwatch1 />
              <Timer1 />
            </>
          }
      </Container>
    );
  }
}
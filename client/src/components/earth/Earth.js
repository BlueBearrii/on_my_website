import React, { Component } from "react";
import styled from "styled-components";

export default class Earth extends Component {
  render() {
    return <Container>{this.props.selectMap}</Container>;
  }
}

const Container = styled.div`
  width: 100vw;
  height: 300vh;
  background-color: #ededed;
  align-items: center;
  justify-content: center;
`;

import React, { Component } from "react";
import styled from "styled-components";
import earthMap from "./assets/earthMap.png";

export default class Earth extends Component {
  render() {
    return (
      <Container>
        <img src={earthMap} width="100%" height="auto" />
      </Container>
    );
  }
}

const Container = styled.div``;

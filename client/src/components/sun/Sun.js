import React, { Component } from "react";
import styled from "styled-components";
import sunMap from "./assets/sunMap.png";

export default class Sun extends Component {
  render() {
    return (
      <Container>
        <img src={sunMap} width="100%" height="auto" />
      </Container>
    );
  }
}

const Container = styled.div``;

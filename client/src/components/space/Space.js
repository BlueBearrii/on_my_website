import React, { Component } from "react";
import styled from "styled-components";
import galaxy from "./assets/galaxy.jpg";

export default class Space extends Component {
  render() {
    const { moveRocket } = this.props;
    return (
      <Container>
        <button onClick={() => moveRocket("down", "Earth")}>Down</button>
        <button onClick={() => moveRocket("down", "Saturn")}>Down</button>
      </Container>
    );
  }
}

const Container = styled.div`
  background-image: url(${galaxy});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

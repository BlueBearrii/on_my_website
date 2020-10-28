import React, { Component } from "react";
import styled from "styled-components";
import rocketModel from "./assets/rocket.png";

export default class Rocket extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <img src={rocketModel} width="500" height="500" />;
  }
}
const Position = styled.div``;

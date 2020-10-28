import React, { Component } from "react";
import styled from "styled-components";
import rocketModel from "./assets/rocket.png";
import fire from "./assets/fire.png";

export default class Rocket extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { fireState } = this.props;
    return (
      <Position>
        <img src={rocketModel} width="500" height="500" />
        <Power src={fire} width="150" height="150" fireState={fireState} />
      </Position>
    );
  }
}
const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Power = styled.img`
  transform: rotate(180deg);
  visibility: ${(props) => (props.fireState ? "visible" : "hidden")};
`;

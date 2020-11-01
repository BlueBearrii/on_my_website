import React, { Component } from "react";
import styled from "styled-components";
import rocketModel from "./assets/rocket.png";
import fire from "./assets/fire.png";
import go from "./assets/GoButton.png";

export default class Rocket extends Component {
  render() {
    const { moveMap, isButtonVisible, isFireVisible } = this.props;
    return (
      <Position>
        <RocketStyles src={rocketModel} width="50%" height="50%" alt="rocket" />
        <GoButton
          src={go}
          width="20%"
          height="auto"
          alt="go"
          onClick={() => moveMap("MOVEUP")}
          isButtonVisible={isButtonVisible}
        />
        <Power
          src={fire}
          width="20%"
          height="20%"
          alt="fire"
          isFireVisible={isFireVisible}
        />
      </Position>
    );
  }
}
const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RocketStyles = styled.img`
  animation: shake 0.5s;
  animation-iteration-count: infinite;

  @keyframes shake {
    0% {
      transform: translate(1px, 1px);
    }
    10% {
      transform: translate(-1px, -2px);
    }
    20% {
      transform: translate(-3px, 0px);
    }
    30% {
      transform: translate(3px, 2px);
    }
    40% {
      transform: translate(1px, -1px);
    }
    50% {
      transform: translate(-1px, 2px);
    }
    60% {
      transform: translate(-3px, 1px);
    }
    70% {
      transform: translate(3px, 1px);
    }
    80% {
      transform: translate(-1px, -1px);
    }
    90% {
      transform: translate(1px, 2px);
    }
    100% {
      transform: translate(1px, -2px);
    }
  }
`;

const Power = styled.img`
  transform: rotate(180deg);
  visibility: ${(props) => (props.isFireVisible ? "visible" : "hidden")};

  animation: jett 0.5s;
  animation-iteration-count: infinite;

  @keyframes jett {
    0% {
      transform: scale(1) rotate(180deg);
    }
    10% {
      transform: scale(1.2) rotate(180deg);
    }
    20% {
      transform: scale(1.5) rotate(180deg);
    }
    30% {
      transform: scale(0.7) rotate(180deg);
    }
    40% {
      transform: scale(1.5) rotate(180deg);
    }
    50% {
      transform: scale(1.2) rotate(180deg);
    }
    60% {
      transform: scale(1.1) rotate(180deg);
    }
    70% {
      transform: scale(0.8) rotate(180deg);
    }
    80% {
      transform: scale(1) rotate(180deg);
    }
    90% {
      transform: scale(1.2) rotate(180deg);
    }
    100% {
      transform: scale(1) rotate(180deg);
    }
  }
`;

const GoButton = styled.img`
  position: absolute;
  top: 30%;
  right: 10%;
  visibility: ${(props) => (props.isButtonVisible ? "visible" : "hidden")};
  transition: transform 0.2s;
  :hover {
    transform: scale(1.3);
  }
`;

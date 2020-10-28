import React, { Component } from "react";
import styled from "styled-components";
import { Rocket } from "./rocket";

export default class Run extends Component {
  constructor() {
    super();
    this.state = {
      rocketPosition: base,
    };
  }

  render() {
    const moveRocket = () => {
      let lastPosition = rocketPosition;
      let speed = 10;
      const onRocketMove = () => {
        if (lastPosition < base / 1.5) speed = 20; // Set speed up
        if (lastPosition < -500) clearInterval(starStarShip);
        // Stop interval
        else {
          lastPosition = lastPosition - speed;
          this.setState(() => {
            return { rocketPosition: lastPosition };
          });
        }

        console.log(lastPosition);
      };

      // Call interval
      var starStarShip = setInterval(onRocketMove, 10);
    };

    const { rocketPosition } = this.state;
    return (
      <Container>
        <RocketSpace positionY={rocketPosition} middle={middle}>
          <Rocket />
        </RocketSpace>
        <button onClick={() => moveRocket()}>Hello</button>
        {console.log("middle : " + middle)}
        {console.log("base : " + base)}
      </Container>
    );
  }
}

const middle = window.innerWidth / 2 - 250;
const base = window.innerHeight - 650;

const RocketSpace = styled.div`
  position: absolute;
  z-index: 2;
  left: ${(props) => props.middle + "px"};
  top: ${(props) => props.positionY + "px"};
`;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

import React, { Component } from "react";
import styled from "styled-components";
import { Rocket } from "./rocket";

export default class Run extends Component {
  constructor() {
    super();
    this.state = {
      rocketPosition: base,
      fireState: false,
    };
  }

  render() {
    //
    // ────────────────────────────────────────────────────── I ──────────
    //   :::::: M O V E   U P & DOWN : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────
    //
    const moveRocket = (_control) => {
      console.log(_control);

      // Initial all state
      this.setState(() => {
        return { fireState: true };
      });
      let lastPosition = rocketPosition;
      let speed = 10;
      const onRocketMove = () => {
        if (lastPosition < base / 1.5) speed = 20; // Set speed up

        // ────────────────────────────────────────────────────────────────────────────────
        // ────────────────────────────────────────────────────────────────────────────────

        //
        // MOVE UP
        //
        if (_control === "up") {
          if (lastPosition < -700) {
            clearInterval(starStarShip);
            this.setState(() => {
              return { fireState: false };
            });
          }
          // Stop interval
          else {
            lastPosition = lastPosition - speed;
            this.setState(() => {
              return { rocketPosition: lastPosition };
            });
          }
        }

        // ────────────────────────────────────────────────────────────────────────────────
        // ────────────────────────────────────────────────────────────────────────────────

        //
        // MOVE DOWN
        //
        if (_control === "down") {
          if (lastPosition > base - 1) {
            clearInterval(starStarShip);
            this.setState(() => {
              return { fireState: false };
            });
          }
          // Stop interval
          else {
            lastPosition = lastPosition + speed;
            this.setState(() => {
              return { rocketPosition: lastPosition };
            });
          }
        }

        // ────────────────────────────────────────────────────────────────────────────────
        // ────────────────────────────────────────────────────────────────────────────────

        //console.log(lastPosition);
      };

      // Call interval
      var starStarShip = setInterval(onRocketMove, 10);
    };

    const { rocketPosition, fireState } = this.state;
    return (
      <Container>
        <RocketSpace positionY={rocketPosition} middle={middle}>
          <Rocket fireState={fireState} />
        </RocketSpace>
        <button onClick={() => moveRocket("up")}>Up</button>
        <button onClick={() => moveRocket("down")}>Down</button>
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

const Container = styled.div``;

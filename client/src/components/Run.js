import React, { Component } from "react";
import styled from "styled-components";
import Space from "./space/Space";
import Rocket from "./rocket";

export default class Run extends Component {
  constructor() {
    super();
    this.state = {
      movement: -200,
      rocketStartposition: 4,
      isFireVisible: false,
      isButtonVisible: true,
    };
  }
  render() {
    // create function

    const moveMap = (_direction) => {
      this.setState(() => {
        return {
          isButtonVisible: false,
          isFireVisible: true,
        };
      });
      let _movement = movement;
      let _starShip = rocketStartposition;
      const runMoveMap = () => {
        if (_direction === "MOVEUP") {
          if (_movement === 0) {
            clearInterval(setMapInterval);
            this.setState(() => {
              return { isFireVisible: false };
            });
          } else {
            _starShip = _starShip + 1;
            _movement = _movement + 1;
            this.setState(() => {
              return { movement: _movement, rocketStartposition: _starShip };
            });
          }

          //console.log(_movement);
        }

        if (_direction === "MOVEDOWN") {
          if (_movement === -199) {
            clearInterval(setMapInterval);
            this.setState(() => {
              return { isButtonVisible: true, isFireVisible: false };
            });
          } else {
            _starShip = _starShip - 1;
            _movement = _movement - 1;
            this.setState(() => {
              return { movement: _movement, rocketStartposition: _starShip };
            });
          }

          //console.log(_movement);
        }
      };

      var setMapInterval = setInterval(runMoveMap, 1);
    };

    const {
      movement,
      rocketStartposition,
      isButtonVisible,
      isFireVisible,
      isShackRocket,
    } = this.state;
    return (
      <div>
        <Layout layout={-1}>
          <Space movement={movement} moveMap={moveMap} />
        </Layout>
        <RocketLayout
          layout={1}
          rocketProps={{ position: rocketStartposition }}
        >
          <Rocket
            moveMap={moveMap}
            isButtonVisible={isButtonVisible}
            isFireVisible={isFireVisible}
          />
        </RocketLayout>
      </div>
    );
  }
}

const Layout = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: ${(props) => props.layout};
`;

const RocketLayout = styled.div`
  position: absolute;
  bottom: ${(props) => props.rocketProps.position + "%"};
  right: 10%;
  width: 40%;
  height: auto;
  z-index: ${(props) => props.layout};
  padding: 0;
`;

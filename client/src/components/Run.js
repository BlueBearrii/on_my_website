import React, { Component } from "react";
import styled from "styled-components";
import Space from "./space/Space";

export default class Run extends Component {
  constructor() {
    super();
    this.state = {
      movement: -200,
    };
  }
  render() {
    // create function

    const moveMap = (_direction) => {
      let _movement = movement;
      const runMoveMap = () => {
        if (_direction === "MOVEUP") {
          if (_movement === 0) {
            clearInterval(setMapInterval);
          } else {
            _movement = _movement + 1;
            this.setState(() => {
              return { movement: _movement };
            });
          }

          console.log(_movement);
        }

        if (_direction === "MOVEDOWN") {
          if (_movement === -200) {
            clearInterval(setMapInterval);
          } else {
            _movement = _movement - 1;
            this.setState(() => {
              return { movement: _movement };
            });
          }

          console.log(_movement);
        }
      };

      var setMapInterval = setInterval(runMoveMap, 1);
    };

    const { movement } = this.state;
    return (
      <div>
        <Layout layout={-1}>
          <Space movement={movement} moveMap={moveMap} />
        </Layout>
        <ButtonControl>
          <button onClick={() => moveMap("MOVEUP")}>Click to Move Up</button>
        </ButtonControl>
      </div>
    );
  }
}

const ButtonControl = styled.div`
  position: absolute;
  z-index: 2;
`;

const Layout = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: ${(props) => props.layout};
`;

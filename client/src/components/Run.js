import React, { Component } from "react";
import styled from "styled-components";
import Earth from "./earth/Earth";
import { Rocket } from "./rocket";
import { Space } from "./space";

export default class Run extends Component {
  constructor() {
    super();
    this.state = {
      rocketPosition: base,
      mapPosition: -1000,
      fireState: false,
      changeMap: "Earth",

      isVisibleButtonUp: true,
    };
  }

  render() {
    //
    // ────────────────────────────────────────────────────── I ──────────
    //   :::::: M O V E   U P & DOWN : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────
    //
    const moveRocket = (_control, _mapControl) => {
      console.log(_control);

      // Initial all state
      this.setState(() => {
        return { fireState: true };
      });
      let lastPosition = rocketPosition;
      let speed = 10;

      let lastMapPosition = mapPosition;

      const onRocketMove = () => {
        if (lastPosition < base / 1.5) speed = 20; // Set speed up

        // ────────────────────────────────────────────────────────────────────────────────
        // ────────────────────────────────────────────────────────────────────────────────

        //
        // MOVE UP
        //
        if (_control === "up") {
          this.setState(() => {
            return { isVisibleButtonUp: false };
          });
          if (lastPosition < -700 && lastMapPosition > mapHeight) {
            clearInterval(starStarShip);
            this.setState(() => {
              return { fireState: false };
            });
          }
          // Stop interval
          else {
            if (lastMapPosition > mapHeight / 2) {
              lastPosition = lastPosition - speed;
              this.setState(() => {
                return {
                  rocketPosition: lastPosition,
                  mapPosition: lastMapPosition,
                };
              });
            }

            lastMapPosition = lastMapPosition + speed;
            this.setState(() => {
              return {
                rocketPosition: lastPosition,
                mapPosition: lastMapPosition,
              };
            });
          }
        }

        // ────────────────────────────────────────────────────────────────────────────────
        // ────────────────────────────────────────────────────────────────────────────────

        //
        // MOVE DOWN
        //
        if (_control === "down") {
          this.setState(() => {
            return { changeMap: [_mapControl] };
          });
          if (lastPosition > base - 1 && lastMapPosition < mapHeight) {
            console.log(lastMapPosition);
            clearInterval(starStarShip);
            this.setState(() => {
              return { fireState: false, isVisibleButtonUp: true };
            });
          }
          // Stop interval
          else {
            speed = 10;
            if (lastMapPosition < mapHeight / 2) {
              if (lastPosition < base) {
                lastPosition = lastPosition + speed;
                this.setState(() => {
                  return {
                    rocketPosition: lastPosition,
                  };
                });
              }
            }

            if (lastMapPosition > -1000) {
              lastMapPosition = lastMapPosition - speed;
              this.setState(() => {
                return {
                  mapPosition: lastMapPosition,
                };
              });
            }
          }
        }

        // ────────────────────────────────────────────────────────────────────────────────
        // ────────────────────────────────────────────────────────────────────────────────

        //console.log(lastPosition);
      };

      // Call interval
      var starStarShip = setInterval(onRocketMove, 15);
    };

    const {
      rocketPosition,
      mapPosition,
      fireState,
      changeMap,
      isVisibleButtonUp,
    } = this.state;
    return (
      <Container>
        <RocketSpace positionY={rocketPosition} middle={middle}>
          <Rocket fireState={fireState} />
        </RocketSpace>
        <EarthSpace positionY={mapPosition}>
          <Earth selectMap={changeMap} />
        </EarthSpace>
        <SpaceGalaxy>
          <Space moveRocket={moveRocket} />
        </SpaceGalaxy>
        <ButtonContainer>
          <button
            style={{
              visibility: `${isVisibleButtonUp ? "visible" : "hidden"}`,
            }}
            onClick={() => moveRocket("up")}
          >
            Up
          </button>
        </ButtonContainer>
      </Container>
    );
  }
}

const middle = window.innerWidth / 2 - 250;
const base = window.innerHeight - 650;
const mapHeight = window.innerHeight;

const RocketSpace = styled.div`
  position: absolute;
  z-index: 1;
  left: ${(props) => props.middle + "px"};
  top: ${(props) => props.positionY + "px"};
`;

const EarthSpace = styled.div`
  position: absolute;
  z-index: -1;
  left: 0px;
  top: ${(props) => props.positionY + "px"};
`;

const SpaceGalaxy = styled.div`
  position: absolute;
  z-index: -2;
  top: 0;
`;

const Container = styled.div``;

const ButtonContainer = styled.div`
  position: absolute;
  z-index: 0;
`;

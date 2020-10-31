import React, { Component } from "react";
import styled from "styled-components";
import Earth from "../earth/Earth";
import Sun from "../sun/Sun";

import { space, sun, earth, saturn, mars, jupiter } from "./assets/index";

export default class Space extends Component {
  constructor() {
    super();
    this.state = {
      planetChangeState: 0,
    };
  }
  render() {
    const { movement, moveMap } = this.props;
    const { planetChangeState } = this.state;
    const planetRender = () => {
      if (planetChangeState === 0) return <Sun />;
      if (planetChangeState === 1) return <Earth />;
    };

    return (
      <Container movement={movement}>
        <PlanetLine>
          <PlanetImage
            src={sun}
            alt="SUN"
            onClick={() => {
              moveMap("MOVEDOWN");
              this.setState(() => {
                return { planetChangeState: 0 };
              });
            }}
            sizeCustom={{ width: 400 }}
          />
          <PlanetImage
            src={earth}
            alt="EARTH"
            onClick={() => {
              moveMap("MOVEDOWN");
              this.setState(() => {
                return { planetChangeState: 1 };
              });
            }}
            sizeCustom={{ width: 150 }}
          />
          <PlanetImage
            src={saturn}
            alt="SATURN"
            onClick={() => moveMap("MOVEDOWN")}
            sizeCustom={{ width: 350 }}
          />
          <PlanetImage
            src={mars}
            alt="MARS"
            onClick={() => moveMap("MOVEDOWN")}
            sizeCustom={{ width: 200 }}
          />
          <PlanetImage
            src={jupiter}
            alt="JUPITER"
            onClick={() => moveMap("MOVEDOWN")}
            sizeCustom={{ width: 250 }}
          />
        </PlanetLine>
        <Layout>{planetRender()}</Layout>
      </Container>
    );
  }
}

const Container = styled.div`
  background-image: url(${space});
  height: 300vh;
  width: 100vw;
  position: absolute;
  top: ${(props) => props.movement + "vh"};
  left: 0px;
  z-index: 0;
`;

const Layout = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 1;
`;

const PlanetLine = styled.div`
  position: absolute;
  top: 180px;
  left: 0px;
  height: 500px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const PlanetImage = styled.img`
  height: auto;
  width: ${(props) => props.sizeCustom.width + "px"};
  margin: 2%;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.3);
  }
`;

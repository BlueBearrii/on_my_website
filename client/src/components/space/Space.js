import React, { Component } from "react";
import styled from "styled-components";
import Earth from "../earth/Earth";
import Jupiter from "../jupiter/Jupiter";
import Mars from "../mars/Mars";
import Saturn from "../saturn/Saturn";
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
      if (planetChangeState === 2) return <Saturn />;
      if (planetChangeState === 3) return <Mars />;
      if (planetChangeState === 4) return <Jupiter />;
    };

    return (
      <Container movement={movement}>
        <PlanetLineLable>
          <h3>PLEASE SELECT THE TARGET</h3>
        </PlanetLineLable>
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
            sizeCustom={{ width: 20 }}
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
            sizeCustom={{ width: 10 }}
          />
          <PlanetImage
            src={saturn}
            alt="SATURN"
            onClick={() => {
              moveMap("MOVEDOWN");
              this.setState(() => {
                return { planetChangeState: 2 };
              });
            }}
            sizeCustom={{ width: 15 }}
          />
          <PlanetImage
            src={mars}
            alt="MARS"
            onClick={() => {
              moveMap("MOVEDOWN");
              this.setState(() => {
                return { planetChangeState: 3 };
              });
            }}
            sizeCustom={{ width: 15 }}
          />
          <PlanetImage
            src={jupiter}
            alt="JUPITER"
            onClick={() => {
              moveMap("MOVEDOWN");
              this.setState(() => {
                return { planetChangeState: 4 };
              });
            }}
            sizeCustom={{ width: 15 }}
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
  top: 10%;
  left: 0px;
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const PlanetLineLable = styled.div`
  position: absolute;
  top: 5%;
  left: 0px;
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  color: #fff;
  font-size: 2rem;
`;

const PlanetImage = styled.img`
  height: auto;
  width: ${(props) => props.sizeCustom.width + "%"};
  margin: 2%;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.3);
  }
`;

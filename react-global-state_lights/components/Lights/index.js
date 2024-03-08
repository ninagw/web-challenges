import styled from "styled-components";
import Light from "../Light";
import { useState } from "react";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lights }) {
  function toggleLight() {
    setLights(!lights);
    // lights.map((light) => light.id === lightId ? (...light, isOn: true) : light)
    // );
  }

  return (
    <StyledLights>
      {lights.map((light) => (
        <li key={light.id}>
          <Light light={light.name} onToggle={() => toggleLight(light.id)} />
        </li>
      ))}
      {/* <li>
        <Light name="Living Room" />
      </li>
      <li>
        <Light name="Kitchen" />
      </li>
      <li>
        <Light name="Bedroom" />
      </li>
      <li>
        <Light name="Bathroom" />
      </li>
      <li>
        <Light name="Garage" />
      </li>
      <li>
        <Light name="Porch" />
      </li>
      <li>
        <Light name="Garden" />
      </li>
      <li>
        <Light name="Office" />
      </li> */}
    </StyledLights>
  );
}

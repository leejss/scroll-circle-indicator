import React from "react";
import styled from "styled-components";
import { getRandomBackground, getRandomColor } from "./utils/randomColor";

export const Screen = styled.div`
  width: 100%;
  height: 100vh;
  background: ${getRandomColor()};
`;

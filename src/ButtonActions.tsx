import React, { MouseEvent } from "react";
import styled from "styled-components";
import { Circle } from "./Circle";

const ScrollButtonActions = styled.div`
  position: fixed;
  z-index: 10;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 200px;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: visible;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
  }
`;

type ButtonActionsProps = {
  moveTo: (
    index: number
  ) => React.MouseEventHandler<HTMLDivElement> | undefined;
  viewIndex: number;
};

const ButtonActions: React.FC<ButtonActionsProps> = ({ moveTo, viewIndex }) => {
  return (
    <ScrollButtonActions>
      {[0, 0, 0].map((_, i) => {
        return (
          <Circle
            key={i}
            id={`${i}`}
            className={i === viewIndex ? "fill" : ""}
            onClick={moveTo(i)}
          />
        );
      })}
    </ScrollButtonActions>
  );
};

export default ButtonActions;

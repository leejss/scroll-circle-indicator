import styled from "styled-components";

export const Circle = styled.div`
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #fff;
  width: 20px;
  height: 20px;
  transition: 0.5s;

  &.fill {
    background: #ffffff;
  }
`;

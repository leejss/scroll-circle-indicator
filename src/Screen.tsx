import styled from "styled-components";

type ScreenProps = {
  backgroundColor: string;
};

export const Screen = styled.div<ScreenProps>`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.backgroundColor};
`;

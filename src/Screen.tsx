import React from "react";
import styled from "styled-components";

const ScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #9b6767;
`;

const Screen = React.forwardRef<HTMLDivElement>(({ children }, ref) => {
  console.log("ref", ref);

  return <ScreenWrapper ref={ref}>{children}</ScreenWrapper>;
});

export default Screen;

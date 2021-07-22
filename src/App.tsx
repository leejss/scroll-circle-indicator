import React, { MouseEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Circle } from "./Circle";
import { Screen } from "./Screen";
import Test from "./Test";

const BlackBackground = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000; */
  .a {
    width: 100%;
    height: 100vh;
    background: orange;
  }
  .b {
    width: 100%;
    height: 100vh;
    background: skyblue;
  }
  .c {
    width: 100%;
    height: 100vh;
    background: violet;
  }
`;

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

const arr = new Array(3).fill(0);

const App: React.FC = () => {
  const [viewIndex, setViewIndex] = useState<number>(0);
  const content = useRef<HTMLDivElement>(null);
  const screens = useRef<HTMLDivElement[] | null>(null);
  const actions = useRef<HTMLDivElement>(null);

  const scrollSpyObserver = new IntersectionObserver((entries) => {
    console.log(entries);
  });

  const onClickHandle = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.parentNode === actions.current) {
      const circles = Array.from(e.currentTarget.children);
      const contents = Array.from(content.current?.children!);

      contents[circles.indexOf(target)].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      const { target } = entries.find((entry) => entry.isIntersecting) || {};
      console.log(target);
    },
    {
      root: null,
      threshold: 0.5,
    }
  );

  useEffect(() => {
    // div element를 리스트에 담는다.
    const contents = Array.from(content.current?.children!);

    // 리스트를 순환하여 옵저버를 단다.
    contents.forEach((item) => scrollObserver.observe(item));
    return () => {
      contents.forEach((item) => scrollObserver.unobserve(item));
    };
  }, []);

  return (
    <BlackBackground>
      <ScrollButtonActions ref={actions} onClick={onClickHandle}>
        {arr.map((_, i) => {
          return <Circle key={i} />;
        })}
      </ScrollButtonActions>

      <div ref={content}>
        {arr.map((_, i) => (
          <Screen key={i}>{i}</Screen>
        ))}
      </div>
    </BlackBackground>
  );
};

export default App;

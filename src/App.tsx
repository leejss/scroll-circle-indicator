import React, { MouseEvent, useEffect, useRef, useState } from "react";
import ButtonActions from "./ButtonActions";
import { Screen } from "./Screen";
import { getRandomColor } from "./utils/colors";

const App: React.FC = () => {
  const screensRef = useRef<HTMLDivElement>(null);
  const [viewIndex, setViewIndex] = useState<number>(0);

  function moveTo(
    index: number
  ): React.MouseEventHandler<HTMLDivElement> | undefined {
    return function (e: MouseEvent<HTMLDivElement>) {
      if (screensRef.current) {
        Array.from(screensRef.current.children)[index].scrollIntoView({
          behavior: "smooth",
        });
      }
    };
  }

  // Observer
  const scrollOberser = new IntersectionObserver(
    (entries) => {
      const { target } = entries.find((entry) => entry.isIntersecting) || {};
      // view index 설정
      if (target && screensRef.current) {
        const index = Array.from(screensRef.current.children).indexOf(target);
        setViewIndex(index);
      }
    },
    {
      root: null,
      threshold: 0.5,
    }
  );

  useEffect(() => {
    if (screensRef.current) {
      Array.from(screensRef.current.children).forEach((item) => {
        scrollOberser.observe(item);
      });
    }
    return () => {
      Array.from(screensRef.current!.children).forEach((item) => {
        scrollOberser.unobserve(item);
      });
    };
  }, []);

  return (
    <div>
      <ButtonActions moveTo={moveTo} viewIndex={viewIndex} />
      <div ref={screensRef}>
        {[0, 0, 0].map((_, i) => (
          <Screen key={i} backgroundColor={getRandomColor()}>
            {i}
          </Screen>
        ))}
      </div>
    </div>
  );
};

export default App;

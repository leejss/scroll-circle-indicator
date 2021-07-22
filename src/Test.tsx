import React, { useEffect, useRef } from "react";

const Test: React.FC = () => {
  const testRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    console.log(testRef.current);
  }, []);
  return (
    <div>
      <div ref={testRef}>TEST</div>
    </div>
  );
};

export default Test;

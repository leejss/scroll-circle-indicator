import React, { MouseEvent } from "react";
import ButtonActions from "./ButtonActions";

const Test: React.FC = () => {
  const moveTo = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget);
  };
  return (
    <div>
      <ButtonActions moveTo={moveTo} />
    </div>
  );
};

export default Test;

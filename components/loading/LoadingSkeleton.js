import React from 'react';
import { Skeleton } from "@nextui-org/react";

export const LoadingSkeleton = ({ isWidthFull = false, maxW = "100%", mode = "text", repeat = 1, textLine = 1 }) => {
  const skeletons = [];
  for (let i = 0; i < repeat; i++) {
    skeletons.push(
      <Skeleton
        key={i}
        width={isWidthFull ? "100%" : `${maxW}px`}
        height="20px"
        className="mb-2"
        count={textLine}
      />
    );
  }
  return <div>{skeletons}</div>;
};

export default LoadingSkeleton;

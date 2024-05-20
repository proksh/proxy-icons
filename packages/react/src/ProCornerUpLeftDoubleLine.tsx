import * as React from "react";
import { IconProps } from "./types";

export const ProCornerUpLeftDoubleLine = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <path
        fill={color}
        d="m5.414 11 4.793-4.793-1.414-1.414L2.586 11l6.207 6.207 1.414-1.414z"
      />
      <path
        fill={color}
        d="m11.914 10 3.793-3.793-1.414-1.414L8.086 11l6.207 6.207 1.414-1.414L11.914 12H18v7h2v-9z"
      />
    </svg>
  );
});

export default ProCornerUpLeftDoubleLine;

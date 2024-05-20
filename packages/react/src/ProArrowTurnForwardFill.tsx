import * as React from "react";
import { IconProps } from "./types";

export const ProArrowTurnForwardFill = React.forwardRef<
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
        d="m18.707 8.293-4-4h-1.414l-4 4L10 10h3v5a3 3 0 1 1-6 0v-5H5v5a5 5 0 0 0 10 0v-5h3z"
      />
    </svg>
  );
});

export default ProArrowTurnForwardFill;

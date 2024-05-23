import * as React from "react";
import { IconProps } from "./types";

export const ProCornerUpLeftDoubleFill = React.forwardRef<
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
        d="m5.414 11 4.793-4.793-1.414-1.414-5.5 5.5v1.414l5.5 5.5 1.414-1.414z"
      />
      <path
        fill={color}
        d="M13.293 4.793 15 5.5V10h5v9h-2v-7h-3v4.5l-1.707.707-5.5-5.5v-1.414z"
      />
    </svg>
  );
});

export default ProCornerUpLeftDoubleFill;

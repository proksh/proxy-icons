import * as React from "react";
import { IconProps } from "./types";

export const ProCornerUpRightDoubleFill = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      ref={forwardedRef}
    >
      <path
        fill={color}
        d="M10.707 4.793 9 5.5V10H4v9h2v-7h3v4.5l1.707.707 5.5-5.5v-1.414z"
      />
      <path
        fill={color}
        d="m18.586 11-4.793-4.793 1.414-1.414 5.5 5.5v1.414l-5.5 5.5-1.414-1.414z"
      />
    </svg>
  );
});

export default ProCornerUpRightDoubleFill;

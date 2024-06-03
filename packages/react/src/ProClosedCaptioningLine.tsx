import * as React from "react";
import { IconProps } from "./types";

export const ProClosedCaptioningLine = React.forwardRef<
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
        d="M9 10.25a1.75 1.75 0 1 0 1.235 2.99l1.059 1.063a3.25 3.25 0 1 1 0-4.605l-1.059 1.062A1.74 1.74 0 0 0 9 10.25M13.25 12a1.75 1.75 0 0 1 2.985-1.24l1.059-1.063a3.25 3.25 0 1 0 0 4.605l-1.059-1.062A1.75 1.75 0 0 1 13.25 12"
      />
      <path fill={color} d="M2 3h20v18H2zm2 2v14h16V5z" />
    </svg>
  );
});

export default ProClosedCaptioningLine;

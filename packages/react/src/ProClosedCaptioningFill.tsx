import * as React from "react";
import { IconProps } from "./types";

export const ProClosedCaptioningFill = React.forwardRef<
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
        d="M2 3v18h20V3zm7 7.25a1.75 1.75 0 1 0 1.235 2.99l1.059 1.063a3.25 3.25 0 1 1 0-4.605l-1.059 1.062A1.74 1.74 0 0 0 9 10.25m6 0a1.75 1.75 0 1 0 1.235 2.99l1.059 1.063a3.25 3.25 0 1 1 0-4.605l-1.059 1.062A1.74 1.74 0 0 0 15 10.25"
      />
    </svg>
  );
});

export default ProClosedCaptioningFill;

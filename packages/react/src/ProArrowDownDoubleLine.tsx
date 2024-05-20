import * as React from "react";
import { IconProps } from "./types";

export const ProArrowDownDoubleLine = React.forwardRef<
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
        d="M7.207 5.543 12 10.336l4.793-4.793 1.414 1.414L12 13.164 5.793 6.957z"
      />
      <path
        fill={color}
        d="M7.207 11.543 12 16.336l4.793-4.793 1.414 1.414L12 19.164l-6.207-6.207z"
      />
    </svg>
  );
});

export default ProArrowDownDoubleLine;

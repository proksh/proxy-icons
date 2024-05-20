import * as React from "react";
import { IconProps } from "./types";

export const ProArrowDownDoubleFill = React.forwardRef<
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
        d="M6.293 5.707 7 4h10l.707 1.707-5 5h-1.414zm0 9L7 13h10l.707 1.707-5 5h-1.414z"
      />
    </svg>
  );
});

export default ProArrowDownDoubleFill;

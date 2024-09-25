import * as React from "react";
import { IconProps } from "./types";

export const ProInsertColumnRightLine = React.forwardRef<
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
        d="M10 3H2v18h8zM4 19V5h4v14zm10-6h2v2h2v-2h2v-2h-2V9h-2v2h-2z"
      />
      <path
        fill={color}
        d="M17 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
      />
    </svg>
  );
});

export default ProInsertColumnRightLine;

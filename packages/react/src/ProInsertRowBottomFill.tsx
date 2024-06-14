import * as React from "react";
import { IconProps } from "./types";

export const ProInsertRowBottomFill = React.forwardRef<
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
        d="M2 2h20v8H2zm15 15a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-6 1v2h2v-2h2v-2h-2v-2h-2v2H9v2z"
      />
    </svg>
  );
});

export default ProInsertRowBottomFill;

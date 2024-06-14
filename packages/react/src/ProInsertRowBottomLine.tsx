import * as React from "react";
import { IconProps } from "./types";

export const ProInsertRowBottomLine = React.forwardRef<
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
        d="M22 2H2v8h20zM4 8V4h16v4zm5 10h2v2h2v-2h2v-2h-2v-2h-2v2H9z"
      />
      <path
        fill={color}
        d="M12 11a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
      />
    </svg>
  );
});

export default ProInsertRowBottomLine;

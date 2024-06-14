import * as React from "react";
import { IconProps } from "./types";

export const ProInputCursorMoveLine = React.forwardRef<
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
        d="M13 5h3V3H8v2h3v14H8v2h8v-2h-3zm7.086 7-3.293-3.293 1.414-1.414L22.915 12l-4.708 4.707-1.414-1.414zM7.207 8.707 3.914 12l3.293 3.293-1.414 1.414L1.086 12l4.707-4.707z"
      />
    </svg>
  );
});

export default ProInputCursorMoveLine;

import * as React from "react";
import { IconProps } from "./types";

export const ProCornerDownRightLine = React.forwardRef<
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
        d="M7 5v7h10.086l-3.793-3.793 1.414-1.414L20.914 13l-6.207 6.207-1.414-1.414L17.086 14H5V5z"
      />
    </svg>
  );
});

export default ProCornerDownRightLine;

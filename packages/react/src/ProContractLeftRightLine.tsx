import * as React from "react";
import { IconProps } from "./types";

export const ProContractLeftRightLine = React.forwardRef<
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
        d="m3.293 7.207 1.414-1.414L10.914 12l-6.207 6.207-1.414-1.414L8.086 12zm17.414 0-1.414-1.414L13.086 12l6.207 6.207 1.414-1.414L15.914 12z"
      />
    </svg>
  );
});

export default ProContractLeftRightLine;

import * as React from "react";
import { IconProps } from "./types";

export const ProFlowerLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="M7.969 5.448C9.423 3.528 11.999 2 11.999 2s2.578 1.528 4.032 3.448A12.9 12.9 0 0 1 21 4.038V13a9 9 0 0 1-11.104 8.753A9.004 9.004 0 0 1 3 13V4.038q1.025.08 2 .31a13 13 0 0 1 2.969 1.1m6.353 1.06a10 10 0 0 0-1.142-1.166c-.408-.358-.82-.677-1.18-.938-.36.26-.772.58-1.18.938a10 10 0 0 0-1.142 1.167c.86.63 1.64 1.365 2.322 2.184a13 13 0 0 1 2.322-2.184m-3.523 3.89A11 11 0 0 0 5 6.414V13c0 2.88 1.74 5.355 4.227 6.43A13 13 0 0 1 9 17c0-2.41.656-4.667 1.799-6.602M19 6.414C14.384 7.719 11 11.965 11 17a11 11 0 0 0 .407 2.975Q11.7 20 12 20a7 7 0 0 0 7-7z"
        />
      </svg>
    );
  },
);

export default ProFlowerLine;

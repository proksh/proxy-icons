import * as React from "react";
import { IconProps } from "./types";

export const ProUnpinLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
          d="m14.182 1.833 8.486 8.485-1.415 1.414-.707-.707-2.432 2.432-1.414-1.414 2.432-2.432-4.243-4.243-2.432 2.433-1.414-1.415 2.432-2.432-.707-.707zm1.59 14.94L18.5 19.5l1.414-1.414-14-14L4.5 5.5l3.122 3.122-2.242.747-.39 1.656 3.535 3.536-4.95 4.95 1.414 1.414 4.95-4.95 3.536 3.536 1.672-.444zm-1.629-1.63-.472 1.735-6.123-6.123 1.655-.552z"
        />
      </svg>
    );
  },
);

export default ProUnpinLine;

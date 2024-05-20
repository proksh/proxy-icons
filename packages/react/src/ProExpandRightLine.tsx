import * as React from "react";
import { IconProps } from "./types";

export const ProExpandRightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12.293 6.207 1.414-1.414L20.914 12l-7.207 7.207-1.414-1.414L17.086 13H8v-2h9.086zM4 19V5h2v14z"
        />
      </svg>
    );
  },
);

export default ProExpandRightLine;

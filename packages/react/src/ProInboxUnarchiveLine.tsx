import * as React from "react";
import { IconProps } from "./types";

export const ProInboxUnarchiveLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 13.914V18h-2v-4.086l-.793.793-1.414-1.414L12 10.086l3.207 3.207-1.414 1.414z"
        />
        <path
          fill={color}
          d="M19.618 3 22 7.764V21H2V7.764L4.382 3zm-.236 4-1-2H5.618l-1 2zM4 9v10h16V9z"
        />
      </svg>
    );
  },
);

export default ProInboxUnarchiveLine;

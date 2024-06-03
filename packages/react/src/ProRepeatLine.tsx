import * as React from "react";
import { IconProps } from "./types";

export const ProRepeatLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4.914 4 1.793-1.793L5.293.793 1.086 5l4.207 4.207 1.414-1.414L4.914 6H20v6h2V4zM4 18v-6H2v8h17.086l-1.793 1.793 1.414 1.414L22.915 19l-4.208-4.207-1.414 1.414L19.086 18z"
        />
      </svg>
    );
  },
);

export default ProRepeatLine;

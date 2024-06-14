import * as React from "react";
import { IconProps } from "./types";

export const ProDirectionLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m8 11 1-1h4.086l-.793-.793 1.414-1.414L16.914 11l-3.207 3.207-1.414-1.414.793-.793H10v3H8z"
        />
        <path
          fill={color}
          d="M1.293 12.707v-1.414l9.9-9.9h1.414l9.9 9.9v1.414l-9.9 9.9h-1.414zM3.414 12l8.486 8.485L20.385 12 11.9 3.515z"
        />
      </svg>
    );
  },
);

export default ProDirectionLine;

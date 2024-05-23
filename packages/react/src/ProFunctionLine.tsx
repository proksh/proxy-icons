import * as React from "react";
import { IconProps } from "./types";

export const ProFunctionLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3 3 4v6l1 1h6l1-1V4l-1-1zm1 6V5h4v4zm9 4-1 1v6l1 1h6l1-1v-6l-1-1zm1 6v-4h4v4zM3 14l1-1h6l1 1v6l-1 1H4l-1-1zm2 1v4h4v-4zm9-12-1 1v6l1 1h6l1-1V4l-1-1zm1 6V5h4v4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFunctionLine;

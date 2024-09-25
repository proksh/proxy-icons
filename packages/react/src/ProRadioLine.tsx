import * as React from "react";
import { IconProps } from "./types";

export const ProRadioLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 6H5v4h9V8h2v2h3zM8 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        />
        <path
          fill={color}
          d="M21 3H8V1H6v2H3L2 4v16l1 1h18l1-1V4zM4 5h16v14H4z"
        />
      </svg>
    );
  },
);

export default ProRadioLine;

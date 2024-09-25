import * as React from "react";
import { IconProps } from "./types";

export const ProSofaFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.5 8c-.508 0-.997.084-1.452.24A6 6 0 0 1 9 3h6a6 6 0 0 1 5.952 5.24A4.5 4.5 0 0 0 15 12.5v.5H9v-.5A4.5 4.5 0 0 0 4.5 8"
        />
        <path
          fill={color}
          d="M4.5 10a2.5 2.5 0 0 0-1.786 4.25l.286.29V21h18v-6.459l.286-.291A2.5 2.5 0 1 0 17 12.5V15H7v-2.5A2.5 2.5 0 0 0 4.5 10"
        />
      </svg>
    );
  },
);

export default ProSofaFill;

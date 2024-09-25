import * as React from "react";
import { IconProps } from "./types";

export const ProSwordFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3.764 6.74 11.314 11.314-1.414 1.414 1.414 1.414 2.475-2.475 2.828 2.828 1.414-1.414-2.828-2.828 2.475-2.475-1.414-1.414-1.414 1.414L7.3 3.204l-.707-.293H4.47l-1 1v2.122z"
        />
        <path
          fill={color}
          d="m20.913 6.917.292-.708V4.09l-1-1h-2.12l-.708.292-3.89 3.89 3.536 3.535zm-14.85 7.778 1.768-1.768 3.535 3.536L9.6 18.23l1.414 1.415L9.6 21.059l-2.475-2.475-2.828 2.828-1.414-1.414L5.71 17.17l-2.475-2.475 1.414-1.415z"
        />
      </svg>
    );
  },
);

export default ProSwordFill;

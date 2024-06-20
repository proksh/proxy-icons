import * as React from "react";
import { IconProps } from "./types";

export const ProHexagonLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.423 2.34h11.155L23.155 12l-5.577 9.66H6.423L.846 12zm1.155 2L3.155 12l4.423 7.66h8.845L20.846 12l-4.423-7.66z"
        />
      </svg>
    );
  },
);

export default ProHexagonLine;

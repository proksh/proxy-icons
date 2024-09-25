import * as React from "react";
import { IconProps } from "./types";

export const ProSurveyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 10v2h2v-2zm0 5v-2h2v2zm0 1v2h2v-2z" />
        <path
          fill={color}
          d="M7 2h10v2h4v18H3V4h4zm10 6H7V6H5v14h14V6h-2zM9 4v2h6V4z"
        />
      </svg>
    );
  },
);

export default ProSurveyLine;

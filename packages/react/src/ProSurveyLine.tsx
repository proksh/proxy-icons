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
        {...props}
        ref={forwardedRef}
      >
        <path fill={color} d="M7 10v2h2v-2zm0 5v-2h2v2zm0 1v2h2v-2z" />
        <path
          fill={color}
          d="M7 2h10v2h4v18H3V4h4zm10 6V6h2v14H5V6h2v2zM9 4v2h6V4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSurveyLine;

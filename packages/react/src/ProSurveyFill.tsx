import * as React from "react";
import { IconProps } from "./types";

export const ProSurveyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 4h3v4h12V4h3v18H3zm4 6v2h2v-2zm0 3v2h2v-2zm0 5h2v-2H7z"
        />
        <path fill={color} d="M8 3v3h8V3z" />
      </svg>
    );
  },
);

export default ProSurveyFill;

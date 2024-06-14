import * as React from "react";
import { IconProps } from "./types";

export const ProSingleQuotesLLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.922 13.25h2.828v5.5h-5.5v-6.114l2.77-7.386h2.007z"
        />
      </svg>
    );
  },
);

export default ProSingleQuotesLLine;

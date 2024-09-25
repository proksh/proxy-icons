import * as React from "react";
import { IconProps } from "./types";

export const ProSingleQuotesRLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.078 10.75H9.25v-5.5h5.5v6.114l-2.77 7.386H9.973z"
        />
      </svg>
    );
  },
);

export default ProSingleQuotesRLine;

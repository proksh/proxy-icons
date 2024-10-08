import * as React from "react";
import { IconProps } from "./types";

export const ProSlackLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.5 3A1.5 1.5 0 0 0 13 4.5v5a1.5 1.5 0 0 0 3 0v-5A1.5 1.5 0 0 0 14.5 3M13 14.5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 0-3h-5a1.5 1.5 0 0 0-1.5 1.5m-5 0a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0zm-5-5A1.5 1.5 0 0 0 4.5 11h5a1.5 1.5 0 0 0 0-3h-5A1.5 1.5 0 0 0 3 9.5m8-5A1.5 1.5 0 1 0 9.5 6H11zM19.5 8A1.5 1.5 0 0 0 18 9.5V11h1.5a1.5 1.5 0 0 0 0-3M13 19.5a1.5 1.5 0 1 0 1.5-1.5H13zM4.5 16A1.5 1.5 0 0 0 6 14.5V13H4.5a1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProSlackLine;

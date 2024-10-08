import * as React from "react";
import { IconProps } from "./types";

export const ProRecordMailLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.257 15A5.48 5.48 0 0 1 13 11.5a5.5 5.5 0 1 1 6 5.478V17H5.5A5.5 5.5 0 0 1 0 11.518V11.5a5.48 5.48 0 0 1 2.448-4.576A5.5 5.5 0 0 1 9.743 15zm4.243 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M9 11.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0"
        />
      </svg>
    );
  },
);

export default ProRecordMailLine;

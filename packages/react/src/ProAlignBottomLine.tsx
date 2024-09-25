import * as React from "react";
import { IconProps } from "./types";

export const ProAlignBottomLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.793 11.293 8 13.086V3H6v10.086l-1.793-1.793-1.414 1.414L7 16.914l4.207-4.207zM3 21h18v-2H3zm14-4.086-4.207-4.207 1.414-1.414L16 13.086V3h2v10.086l1.793-1.793 1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProAlignBottomLine;

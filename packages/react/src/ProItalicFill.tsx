import * as React from "react";
import { IconProps } from "./types";

export const ProItalicFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 6.5h-2.37l-2.2 11H15v3H7v-3h2.37l2.2-11H9v-3h8z"
        />
      </svg>
    );
  },
);

export default ProItalicFill;

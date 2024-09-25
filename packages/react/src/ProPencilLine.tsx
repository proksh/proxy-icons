import * as React from "react";
import { IconProps } from "./types";

export const ProPencilLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.254 6.485 18.01 2.243 3.576 16.678v4.243H7.82zM15.182 7.9l1.415 1.414-9.607 9.607H5.576v-1.415zm2.829 0-1.414-1.414L18.01 5.07l1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProPencilLine;

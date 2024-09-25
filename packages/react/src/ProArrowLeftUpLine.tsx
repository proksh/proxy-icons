import * as React from "react";
import { IconProps } from "./types";

export const ProArrowLeftUpLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.004 8.418v8.586h-2v-12h12v2H8.418L18.703 17.29l-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProArrowLeftUpLine;

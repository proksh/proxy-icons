import * as React from "react";
import { IconProps } from "./types";

export const ProSignpostLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17 5h-5V2h-2v3H4L3 6v8l1 1h6v7h2v-7h5l.707-.293L22.414 10l-4.707-4.707zM5 7h11.586l3 3-3 3H5z"
        />
      </svg>
    );
  },
);

export default ProSignpostLine;

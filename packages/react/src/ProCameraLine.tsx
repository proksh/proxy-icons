import * as React from "react";
import { IconProps } from "./types";

export const ProCameraLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 8a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-2.5 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
        />
        <path
          fill={color}
          d="M15.035 3h-6.07l-2 3H2v15h20V6h-4.965zm-7 5 2-3h3.93l2 3H20v11H4V8z"
        />
      </svg>
    );
  },
);

export default ProCameraLine;

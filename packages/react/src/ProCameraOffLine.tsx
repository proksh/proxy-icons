import * as React from "react";
import { IconProps } from "./types";

export const ProCameraOffLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m20 21 1 1 1.414-1.414-19-19L2 3l3 3H2v15zm-2-2H4V8h3l1.578 1.578a4.5 4.5 0 0 0 6.344 6.344zm-8-8 3.5 3.5A2.5 2.5 0 0 1 10 11m12-5v11.343l-2-2V8h-4.035l-2-3h-3.93l-.151.227-1.442-1.442L8.965 3h6.07l2 3z"
        />
        <path fill={color} d="M16.444 11.787a4.5 4.5 0 0 0-3.731-3.73z" />
      </svg>
    );
  },
);

export default ProCameraOffLine;

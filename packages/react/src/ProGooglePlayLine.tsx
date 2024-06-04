import * as React from "react";
import { IconProps } from "./types";

export const ProGooglePlayLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.001 1.734a1 1 0 0 1 .501.135l16.004 9.266a1 1 0 0 1 0 1.73L4.502 22.131a1 1 0 0 1-1.501-.866V2.735a1 1 0 0 1 1-1m8.292 11.68-4.498 4.498 5.699-3.299zM5 6.118v11.76l5.88-5.88zm10.284 4.302L13.707 12l1.578 1.577L18.009 12zm-7.49-4.336 4.5 4.5 1.199-1.2z"
        />
      </svg>
    );
  },
);

export default ProGooglePlayLine;

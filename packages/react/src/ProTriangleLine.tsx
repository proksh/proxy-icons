import * as React from "react";
import { IconProps } from "./types";

export const ProTriangleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1.5 23.258 21H.74zM4.204 19h15.589L11.999 5.5z"
        />
      </svg>
    );
  },
);

export default ProTriangleLine;

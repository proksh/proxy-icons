import * as React from "react";
import { IconProps } from "./types";

export const ProBringToFrontLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 3H3v9h3v6h6v3h9v-9h-3V6h-6zm-2 3H6v4H5V5h5zm8 8h1v5h-5v-1h4zm-2-6v8H8V8z"
        />
      </svg>
    );
  },
);

export default ProBringToFrontLine;

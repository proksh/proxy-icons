import * as React from "react";
import { IconProps } from "./types";

export const ProSendToBackLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3h9v3h6v6h3v9h-9v-3H6v-6H3zm9 13v-4h4V8h-4v4H8v4zM5 5v5h5V5zm9 14h5v-5h-5z"
        />
      </svg>
    );
  },
);

export default ProSendToBackLine;

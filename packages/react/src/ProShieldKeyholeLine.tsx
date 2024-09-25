import * as React from "react";
import { IconProps } from "./types";

export const ProShieldKeyholeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 11v4h-2v-4h-1V8h4v3z" />
        <path
          fill={color}
          d="m3.757 3.03 8-2h.486l8 2L21 4v12l-.4.8-8.6 6.45-8.6-6.45L3 16V4zM5 4.78V15.5l7 5.25 7-5.25V4.78l-7-1.75z"
        />
      </svg>
    );
  },
);

export default ProShieldKeyholeLine;

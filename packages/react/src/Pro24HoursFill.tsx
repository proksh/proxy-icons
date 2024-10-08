import * as React from "react";
import { IconProps } from "./types";

export const Pro24HoursFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.819 5.904A8 8 0 0 1 19.985 11.5h2.003C21.728 6.21 17.355 2 12 2c-2.53 0-4.839.94-6.6 2.487L3.708 2.793 2 3.5v5l1 1h5l.707-1.707zM4 12a8 8 0 0 0 4 6.93v2.238A10 10 0 0 1 2 12zm7 4a1 1 0 1 1 2 0v.07c0 .306-.13.597-.36.8L9.5 19.662V22H15v-2h-2.87l1.84-1.635A3.07 3.07 0 0 0 15 16.07V16a3 3 0 0 0-6 0zm7-3h-2v6h4v3h2v-9h-2v4h-2z"
        />
      </svg>
    );
  },
);

export default Pro24HoursFill;

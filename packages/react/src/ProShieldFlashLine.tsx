import * as React from "react";
import { IconProps } from "./types";

export const ProShieldFlashLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 5.5 8 12h3v4.5l5-6.5h-3z" />
        <path
          fill={color}
          d="m11.758 1.03-8 2L3 4v12l.4.8 8.6 6.45 8.6-6.45.4-.8V4l-.758-.97-8-2zM5 15.5V4.78l7-1.75 7 1.75V15.5l-7 5.25z"
        />
      </svg>
    );
  },
);

export default ProShieldFlashLine;

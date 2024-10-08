import * as React from "react";
import { IconProps } from "./types";

export const ProFingerprint2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19 10v4a6.98 6.98 0 0 1-2.321 5.206c.45-2.287.429-4.467.375-6.206h-2.006c.045 1.472.074 3.131-.168 4.872-.1.895-.276 1.807-.568 2.737l-.016.05a13.5 13.5 0 0 1-.94 2.24A9 9 0 0 0 21 14v-4A9 9 0 0 0 5.847 3.432l1.415 1.415A7 7 0 0 1 19 10"
        />
        <path
          fill={color}
          d="M5.992 6.406A6.97 6.97 0 0 0 5 10v4c0 1.699.605 3.256 1.611 4.468.208-.57.33-1.246.392-2.045.079-1.02.054-2.11.027-3.32C7.016 12.44 7 11.742 7 11v-1a5 5 0 0 1 10 0v1h-2v-1a3 3 0 0 0-6 0v5.5c0 1.336-.113 2.372-.421 3.34a7.6 7.6 0 0 1-.567 1.33c-.233.435-.528.895-.901 1.387A9 9 0 0 1 3 14v-4c0-1.868.57-3.604 1.544-5.042z"
        />
        <path
          fill={color}
          d="M11.016 22.947a9 9 0 0 1-2.087-.485c.763-1.062 1.248-2.048 1.556-3.015.394-1.24.515-2.502.515-3.947V9h2v6.5c0 1.555-.129 3.043-.61 4.553a12 12 0 0 1-1.374 2.894"
        />
      </svg>
    );
  },
);

export default ProFingerprint2Line;

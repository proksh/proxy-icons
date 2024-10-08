import * as React from "react";
import { IconProps } from "./types";

export const ProDatabase2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 7.5c0 2.485-4.03 4.5-9 4.5S3 9.985 3 7.5 7.03 3 12 3s9 2.015 9 4.5m-.055 7.5H21v2.5c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5V15h.055c.498 2.25 4.313 4 8.945 4s8.448-1.75 8.945-4"
        />
        <path
          fill={color}
          d="M21 10h-.055c-.497 2.25-4.312 4-8.945 4s-8.448-1.75-8.945-4H3v2.5c0 2.485 4.03 4.5 9 4.5s9-2.015 9-4.5z"
        />
      </svg>
    );
  },
);

export default ProDatabase2Fill;

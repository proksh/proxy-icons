import * as React from "react";
import { IconProps } from "./types";

export const ProHeartPulseFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.001 4.828a6 6 0 0 1 8.486 8.486l-8.488 8.485-8.485-8.485A6 6 0 0 1 3.22 13h4.345l.893-1.488 3.08 5.647L13.618 13H16.5v-2h-4.118l-.92 1.841-2.92-5.354L6.433 11h-4.36A6 6 0 0 1 12 4.828v.002z"
        />
      </svg>
    );
  },
);

export default ProHeartPulseFill;

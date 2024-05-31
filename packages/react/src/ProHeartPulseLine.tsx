import * as React from "react";
import { IconProps } from "./types";

export const ProHeartPulseLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.073 11A6 6 0 0 1 12 4.828v.002l.001-.002a6 6 0 0 1 8.486 8.486l-8.488 8.485-8.485-8.485A6 6 0 0 1 3.22 13H1v-2zm11.342-4.757L12 7.658l-1.415-1.415A4 4 0 0 0 4.25 11h2.183L8.54 7.487l2.92 5.354.921-1.841H16.5v2h-2.882l-2.08 4.159-3.08-5.646L7.567 13H6.028L12 18.97l7.073-7.07a4 4 0 1 0-5.657-5.657"
        />
      </svg>
    );
  },
);

export default ProHeartPulseLine;

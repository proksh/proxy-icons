import * as React from "react";
import { IconProps } from "./types";

export const ProSpeakFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 2a8 8 0 0 0-5 14.245V22h9v-3h4v-4.882l2.46-1.23-2.507-3.762A8 8 0 0 0 9 2m10.575 18h2.178A17.5 17.5 0 0 0 23 13.5c0-1.921-.31-3.77-.882-5.5h-2.122A15.5 15.5 0 0 1 21 13.5c0 2.321-.51 4.523-1.425 6.5"
        />
      </svg>
    );
  },
);

export default ProSpeakFill;

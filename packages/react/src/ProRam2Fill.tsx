import * as React from "react";
import { IconProps } from "./types";

export const ProRam2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 5 1 6v9l1 1v2l1 1h6l.832-.445.703-1.055h2.93l.703 1.055L15 19h6l1-1v-2l1-1V6l-1-1zm2 12v-1h5.131l-.666 1zm11.535 0-.667-1H20v1zM5 12V9h2v3zm4 0V9h2v3zm4 0V9h2v3zm4 0V9h2v3z"
        />
      </svg>
    );
  },
);

export default ProRam2Fill;

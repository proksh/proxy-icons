import * as React from "react";
import { IconProps } from "./types";

export const ProUpload2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11.293 2.293-7 7L5 11h6v6h2v-6h6l.707-1.707-7-7z"
        />
        <path fill={color} d="M4 15.5v3.25h16V15.5h2v4.25l-1 1H3l-1-1V15.5z" />
      </svg>
    );
  },
);

export default ProUpload2Fill;

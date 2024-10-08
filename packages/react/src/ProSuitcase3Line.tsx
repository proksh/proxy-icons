import * as React from "react";
import { IconProps } from "./types";

export const ProSuitcase3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M7 10v8h2v-8zm4 8v-8h2v8zm4-8v8h2v-8z" />
        <path
          fill={color}
          d="m8 2 1-1h6l1 1v5h1V6h2v1h1l1 1v12l-1 1h-1v1h-2v-1H7v1H5v-1H4l-1-1V8l1-1h1V6h2v1h1zm6 1h-4v4h4zM5 9v10h14V9z"
        />
      </svg>
    );
  },
);

export default ProSuitcase3Line;

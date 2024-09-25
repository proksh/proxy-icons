import * as React from "react";
import { IconProps } from "./types";

export const ProRepeatOneFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 .99 22.012 6H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h10zM8 23.135l-6.012-5.01H18a2 2 0 0 0 2-2v-8h2v8a4 4 0 0 1-4 4H8z"
        />
        <path fill={color} d="M12.75 8.25H10v1.5h1.25V16h1.5z" />
      </svg>
    );
  },
);

export default ProRepeatOneFill;

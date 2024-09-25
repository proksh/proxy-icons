import * as React from "react";
import { IconProps } from "./types";

export const ProRepeatOneLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.207 1.293 21.914 6H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4h11.086l-1.293-1.293zM6.793 22.707 2.086 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4H6.914l1.293 1.293z"
        />
        <path fill={color} d="M12.75 8.25H10v1.5h1.25V16h1.5z" />
      </svg>
    );
  },
);

export default ProRepeatOneLine;

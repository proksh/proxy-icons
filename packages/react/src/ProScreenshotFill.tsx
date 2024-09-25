import * as React from "react";
import { IconProps } from "./types";

export const ProScreenshotFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m3 4 1-1h16l1 1v9h-2V5H5v8H3z" />
        <path
          fill={color}
          d="M13 18c0-.554.113-1.082.317-1.562L12 15.12l-1.317 1.317a4 4 0 1 1-2.121-2.121L9.88 13 6.44 9.56l2.122-2.12L12 10.878l3.44-3.44 2.12 2.122L14.122 13l1.317 1.316A4 4 0 1 1 13 18m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M5 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
        />
      </svg>
    );
  },
);

export default ProScreenshotFill;

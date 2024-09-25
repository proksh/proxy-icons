import * as React from "react";
import { IconProps } from "./types";

export const ProOverlineFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20 2.5H4v3h16zM7.728 22l1.422-3.5h5.7l1.422 3.5h3.238L13.39 6.935h-2.78L4.49 22zM12 11.485l1.63 4.015h-3.26z"
        />
      </svg>
    );
  },
);

export default ProOverlineFill;

import * as React from "react";
import { IconProps } from "./types";

export const ProRuler2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 3h9v9h9v9h-3v-3h-2v3h-2v-4h-2v4h-2v-3H8v3H3v-5h3v-2H3v-2h4v-2H3V8h3V6H3z"
        />
      </svg>
    );
  },
);

export default ProRuler2Fill;

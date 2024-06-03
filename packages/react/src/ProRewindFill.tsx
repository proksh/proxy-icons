import * as React from "react";
import { IconProps } from "./types";

export const ProRewindFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.985 5.143 23.5 6v12l-1.515.858-8.485-5.092V18l-1.515.858-10-6v-1.716l10-6L13.5 6v4.234z"
        />
      </svg>
    );
  },
);

export default ProRewindFill;

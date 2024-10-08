import * as React from "react";
import { IconProps } from "./types";

export const ProInputFieldFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 5.5h-2.5v13H16v3H8v-3h2.5v-13H8v-3h8zM8 7H1v10h7v-2H3V9h5zm8 2h5v6h-5v2h7V7h-7z"
        />
      </svg>
    );
  },
);

export default ProInputFieldFill;

import * as React from "react";
import { IconProps } from "./types";

export const ProEnglishInputLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4H2v16h10v-2H4v-5h8v-2H4V6h8zm4 10.5a2.5 2.5 0 0 1 5 0V20h2v-5.5a4.5 4.5 0 0 0-7-3.742V10h-2v10h2z"
        />
      </svg>
    );
  },
);

export default ProEnglishInputLine;

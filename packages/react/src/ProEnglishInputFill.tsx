import * as React from "react";
import { IconProps } from "./types";

export const ProEnglishInputFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4H1.5v16H12v-3H4.5v-3.5H12v-3H4.5V7H12zm4.5 10.5a2 2 0 1 1 4 0V20h3v-5.5a5 5 0 0 0-7-4.584V9.5h-3V20h3z"
        />
      </svg>
    );
  },
);

export default ProEnglishInputFill;

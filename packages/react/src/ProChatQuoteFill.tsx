import * as React from "react";
import { IconProps } from "./types";

export const ProChatQuoteFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v16h7.52L12 22.1l2.48-3.1H22V3zm6 11v-2.5L9.5 8H11l-1 3.5h1.5V14zm4.5 0v-2.5L14 8h1.5l-1 3.5H16V14z"
        />
      </svg>
    );
  },
);

export default ProChatQuoteFill;

import * as React from "react";
import { IconProps } from "./types";

export const ProChatQuoteLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 14v-2.5L9.5 8H11l-1 3.5h1.5V14zm4.5-2.5V14H16v-2.5h-1.5l1-3.5H14z"
        />
        <path
          fill={color}
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm2 2v12h6.48L12 18.9l1.52-1.9H20V5z"
        />
      </svg>
    );
  },
);

export default ProChatQuoteLine;

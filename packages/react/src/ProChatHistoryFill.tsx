import * as React from "react";
import { IconProps } from "./types";

export const ProChatHistoryFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm11 4h-2v6h6v-2h-4z"
        />
      </svg>
    );
  },
);

export default ProChatHistoryFill;

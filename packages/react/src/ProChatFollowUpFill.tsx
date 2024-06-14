import * as React from "react";
import { IconProps } from "./types";

export const ProChatFollowUpFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm13 5v6h2V8zm-2 2h-2V8H9v2H7v2h2v2h2v-2h2z"
        />
      </svg>
    );
  },
);

export default ProChatFollowUpFill;

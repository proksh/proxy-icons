import * as React from "react";
import { IconProps } from "./types";

export const ProChatFeedbackLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 12V7h2v5zm0 1v2h2v-2z" />
        <path
          fill={color}
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm2 2v12h6.48L12 18.9l1.52-1.9H20V5z"
        />
      </svg>
    );
  },
);

export default ProChatFeedbackLine;

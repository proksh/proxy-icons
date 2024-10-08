import * as React from "react";
import { IconProps } from "./types";

export const ProBugLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4m6.366 6 .08.226 1.477-1.043 1.153 1.634-2.11 1.49q.033.343.034.693v2h3v2h-3c0 .856-.154 1.676-.435 2.434l.011-.016 2.5 1.765-1.153 1.634-2.311-1.632A6.99 6.99 0 0 1 12 22a6.99 6.99 0 0 1-5.611-2.815l-2.312 1.632-1.153-1.634 2.5-1.765.01.016A7 7 0 0 1 5 15H2v-2h3v-2q0-.35.034-.694l-2.11-1.489 1.153-1.634 1.477 1.043.08-.226zM7 11v4a5 5 0 0 0 4 4.9V14h2v5.9a5 5 0 0 0 4-4.9v-4q0-.515-.1-1H7.1q-.1.485-.1 1"
        />
      </svg>
    );
  },
);

export default ProBugLine;

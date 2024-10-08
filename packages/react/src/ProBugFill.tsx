import * as React from "react";
import { IconProps } from "./types";

export const ProBugFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4M5.554 8.226 5.634 8h12.732l.08.226 1.477-1.043 1.153 1.634-2.11 1.49q.033.343.034.693v2h3v2h-3c0 .856-.154 1.676-.435 2.434l.011-.016 2.5 1.765-1.153 1.634-2.311-1.632A7 7 0 0 1 13 21.93V14h-2v7.93a7 7 0 0 1-4.611-2.745l-2.312 1.632-1.153-1.634 2.5-1.765.01.016A7 7 0 0 1 5 15H2v-2h3v-2q0-.35.034-.694l-2.11-1.489 1.153-1.634z"
        />
      </svg>
    );
  },
);

export default ProBugFill;

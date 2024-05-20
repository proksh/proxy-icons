import * as React from "react";
import { IconProps } from "./types";

export const ProLinksLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.778 4.222a6 6 0 0 0-8.485 0L9.879 5.636a5.98 5.98 0 0 0-1.725 4.875 5.98 5.98 0 0 0 1.725 3.61 6 6 0 0 0 2.097 1.362 2.5 2.5 0 0 0 .307-2.05 4 4 0 0 1-.99-6.382l1.414-1.415a4 4 0 0 1 5.657 5.657l-1.17 1.17a7.5 7.5 0 0 1 .139 2.485 6 6 0 0 0 1.031-.827l1.414-1.414a6 6 0 0 0 0-8.485"
        />
        <path
          fill={color}
          d="M12.707 16.95a3.995 3.995 0 0 0 0-5.657 4 4 0 0 0-.99-.725 2.5 2.5 0 0 1 .307-2.051 6 6 0 0 1 2.097 1.362 6 6 0 0 1 0 8.485l-1.414 1.414a6 6 0 0 1-8.485-8.485l1.414-1.414a6 6 0 0 1 1.03-.827 7.5 7.5 0 0 0 .14 2.485l-1.17 1.17a4 4 0 0 0 5.657 5.657z"
        />
      </svg>
    );
  },
);

export default ProLinksLine;

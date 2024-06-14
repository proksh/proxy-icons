import * as React from "react";
import { IconProps } from "./types";

export const ProStrikethroughLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 5C9.571 5 8 6.54 8 8c0 .68.434 1.285 1.25 1.83.804.536 1.786.877 2.414 1.055.141.04.282.076.436.115H7.49C6.687 10.301 6 9.318 6 8c0-2.958 2.906-5 6-5 1.134 0 2.318.261 3.341.712 1.007.443 1.964 1.117 2.514 2.023l-1.71 1.038c-.26-.428-.814-.88-1.61-1.231A6.5 6.5 0 0 0 12 5m9 7v2h-3.656c.39.555.656 1.22.656 2 0 2.958-2.906 5-6 5-1.092 0-2.259-.182-3.285-.562-1.008-.372-2-.98-2.57-1.919l1.71-1.038c.24.396.759.788 1.553 1.081.777.287 1.705.438 2.592.438 2.429 0 4-1.54 4-3 0-.584-.41-1.173-1.26-1.746a7 7 0 0 0-.408-.254H3v-2z"
        />
      </svg>
    );
  },
);

export default ProStrikethroughLine;

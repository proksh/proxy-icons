import * as React from "react";
import { IconProps } from "./types";

export const ProGroup2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.176-3.933 9.434-8.974 9.948a10 10 0 0 1-1.413.045C6.27 21.79 2 17.393 2 12m14 3h-1a3 3 0 0 0-3 3v2a8 8 0 0 0 6.606-3.487A3 3 0 0 0 16 15m-6 3a4.99 4.99 0 0 1 1.876-3.904A4 4 0 0 0 11 14H8c-1.29 0-2.436.61-3.168 1.557A8.02 8.02 0 0 0 10 19.748zm2-8.75a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m5.5 1.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
        />
      </svg>
    );
  },
);

export default ProGroup2Fill;

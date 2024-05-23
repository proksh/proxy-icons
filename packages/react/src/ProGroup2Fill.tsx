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
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.176-3.933 9.434-8.974 9.948a10 10 0 0 1-1.413.045C6.27 21.79 2 17.393 2 12m14 3a3 3 0 0 1 2.606 1.513A8 8 0 0 1 12 20v-2a3 3 0 0 1 3-3zm-6 3v1.748a8.02 8.02 0 0 1-5.168-4.19A4 4 0 0 1 8 14h3q.452 0 .876.096A4.99 4.99 0 0 0 10 18m2-8.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m5.5 1.25a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProGroup2Fill;

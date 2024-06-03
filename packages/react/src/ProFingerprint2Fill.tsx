import * as React from "react";
import { IconProps } from "./types";

export const ProFingerprint2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          stroke={color}
          d="m6.52 5.52-.035-.035-.639 1.176A7 7 0 0 0 5 10v5c0 1.018-.04 1.814-.204 2.483A8 8 0 0 1 4 14v-4a8 8 0 1 1 16 0v4a7.96 7.96 0 0 1-1.14 4.118c.092-.74.14-1.457.14-2.118v-6A7 7 0 0 0 7.298 4.815zm6.184 16.45a13 13 0 0 0 .64-1.614c.523-1.645.656-3.247.656-4.856V8h-4v7.5c0 1.39-.117 2.54-.468 3.644a9 9 0 0 1-.975 2.08 8 8 0 0 1-.857-.476 7.2 7.2 0 0 0 .732-1.484C8.961 17.794 9 16.258 9 15v-5a3 3 0 0 1 .175-1.014l.215-.597-.053-.053.703-.607A3 3 0 0 1 15 10v6c0 1.739-.456 4.065-1.142 5.783q-.563.135-1.154.186Z"
          strokeWidth="2"
        />
      </svg>
    );
  },
);

export default ProFingerprint2Fill;

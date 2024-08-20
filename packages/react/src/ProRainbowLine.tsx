import * as React from "react";
import { IconProps } from "./types";

export const ProRainbowLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23 15c0-6.075-4.925-11-11-11S1 8.925 1 15v5h2v-5l.004-.265a8.97 8.97 0 0 1 2.72-6.186A8.97 8.97 0 0 1 12 6l.265.004A9 9 0 0 1 21 15v5h2z"
        />
        <path
          fill={color}
          d="M23 15c0-6.075-4.925-11-11-11S1 8.925 1 15v5h2v-5l.004-.265a8.97 8.97 0 0 1 2.72-6.186A8.97 8.97 0 0 1 12 6l.265.004A9 9 0 0 1 21 15v5h2z"
        />
        <path
          fill={color}
          d="M23 15c0-6.075-4.925-11-11-11S1 8.925 1 15v5h2v-5l.004-.265a8.97 8.97 0 0 1 2.72-6.186A8.97 8.97 0 0 1 12 6l.265.004A9 9 0 0 1 21 15v5h2z"
        />
        <path
          fill={color}
          d="M23 15c0-6.075-4.925-11-11-11S1 8.925 1 15v5h2v-5l.004-.265a8.97 8.97 0 0 1 2.72-6.186A8.97 8.97 0 0 1 12 6l.265.004A9 9 0 0 1 21 15v5h2z"
        />
        <path
          fill={color}
          d="M19 15a7 7 0 1 0-14 0v5h2v-5l.005-.217a4.97 4.97 0 0 1 .921-2.683c.3-.42.662-.79 1.073-1.1.836-.628 1.875-1 3.001-1l.216.005A5.003 5.003 0 0 1 17 15v5h2z"
        />
        <path
          fill={color}
          d="M19 15a7 7 0 1 0-14 0v5h2v-5l.005-.217a4.97 4.97 0 0 1 .921-2.683c.3-.42.662-.79 1.073-1.1.836-.628 1.875-1 3.001-1l.216.005A5.003 5.003 0 0 1 17 15v5h2z"
        />
        <path
          fill={color}
          d="M19 15a7 7 0 1 0-14 0v5h2v-5l.005-.217a4.97 4.97 0 0 1 .921-2.683c.3-.42.662-.79 1.073-1.1.836-.628 1.875-1 3.001-1l.216.005A5.003 5.003 0 0 1 17 15v5h2z"
        />
        <path
          fill={color}
          d="M19 15a7 7 0 1 0-14 0v5h2v-5l.005-.217a4.97 4.97 0 0 1 .921-2.683c.3-.42.662-.79 1.073-1.1.836-.628 1.875-1 3.001-1l.216.005A5.003 5.003 0 0 1 17 15v5h2z"
        />
        <path
          fill={color}
          d="M12.605 12.06a3 3 0 0 0-1.41.05A3.004 3.004 0 0 0 9 15v5h2v-5l.007-.116A1 1 0 0 1 12 14l.116.007A1 1 0 0 1 13 15v5h2v-5q-.002-.405-.102-.779a3 3 0 0 0-2.293-2.16"
        />
        <path
          fill={color}
          d="M12.605 12.06a3 3 0 0 0-1.41.05A3.004 3.004 0 0 0 9 15v5h2v-5l.007-.116A1 1 0 0 1 12 14l.116.007A1 1 0 0 1 13 15v5h2v-5q-.002-.405-.102-.779a3 3 0 0 0-2.293-2.16"
        />
        <path
          fill={color}
          d="M12.605 12.06a3 3 0 0 0-1.41.05A3.004 3.004 0 0 0 9 15v5h2v-5l.007-.116A1 1 0 0 1 12 14l.116.007A1 1 0 0 1 13 15v5h2v-5q-.002-.405-.102-.779a3 3 0 0 0-2.293-2.16"
        />
        <path
          fill={color}
          d="M12.605 12.06a3 3 0 0 0-1.41.05A3.004 3.004 0 0 0 9 15v5h2v-5l.007-.116A1 1 0 0 1 12 14l.116.007A1 1 0 0 1 13 15v5h2v-5q-.002-.405-.102-.779a3 3 0 0 0-2.293-2.16"
        />
      </svg>
    );
  },
);

export default ProRainbowLine;
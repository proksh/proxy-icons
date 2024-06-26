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
          d="M12 1a9 9 0 0 0-9 9v4c0 2.078.704 3.991 1.887 5.515.336-.4.563-.824.722-1.266C5.945 17.316 6 16.247 6 15v-5c0-1.036.263-2.01.725-2.861l1.51 1.51A4 4 0 0 0 8 10v5c0 1.253-.045 2.634-.509 3.926a6.1 6.1 0 0 1-1.205 2.027 9 9 0 0 0 2.643 1.51c.763-1.063 1.248-2.049 1.556-3.016.394-1.24.515-2.502.515-3.947V9h2v6.5c0 1.555-.129 3.043-.61 4.553a12 12 0 0 1-1.374 2.894 9.1 9.1 0 0 0 3.573-.325C15.434 20.746 16 18.026 16 16v-3h2v3c0 1.593-.302 3.57-.832 5.37A8.99 8.99 0 0 0 21 14v-4a9 9 0 0 0-9-9M9.386 6.972 7.97 5.555A6 6 0 0 1 18 10v1h-2v-1a4 4 0 0 0-6.614-3.028"
        />
        <path
          stroke={color}
          d="m6.52 5.52-.035-.035-.639 1.176A7 7 0 0 0 5 10v5c0 1.018-.04 1.814-.204 2.483A8 8 0 0 1 4 14v-4a8 8 0 1 1 16 0v4a7.96 7.96 0 0 1-1.14 4.118c.092-.74.14-1.457.14-2.118v-6A7 7 0 0 0 7.298 4.815zm6.184 16.45a13 13 0 0 0 .64-1.614c.523-1.645.656-3.247.656-4.856V8h-4v7.5c0 1.39-.117 2.54-.468 3.644a9 9 0 0 1-.975 2.08 8 8 0 0 1-.857-.476 7.2 7.2 0 0 0 .732-1.484C8.961 17.794 9 16.258 9 15v-5a3 3 0 0 1 .175-1.014l.215-.597-.053-.053.703-.607A3 3 0 0 1 15 10v6c0 1.739-.456 4.065-1.142 5.783q-.563.135-1.154.186Z"
          strokeWidth="2"
        />
      </svg>
    );
  },
);

export default ProFingerprint2Fill;

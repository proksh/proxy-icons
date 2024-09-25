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
        viewBox="0 0 24 24"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M12 1a9 9 0 0 0-9 9v4c0 2.078.704 3.991 1.887 5.515.336-.4.563-.824.722-1.266C5.945 17.316 6 16.247 6 15v-5c0-1.036.263-2.01.725-2.861l1.51 1.51A4 4 0 0 0 8 10v5c0 1.253-.045 2.634-.509 3.926a6.1 6.1 0 0 1-1.205 2.027 9 9 0 0 0 2.643 1.51c.763-1.063 1.248-2.049 1.556-3.016.394-1.24.515-2.502.515-3.947V9h2v6.5c0 1.555-.129 3.043-.61 4.553a12 12 0 0 1-1.374 2.894 9.1 9.1 0 0 0 3.573-.325C15.434 20.746 16 18.026 16 16v-3h2v3c0 1.593-.302 3.57-.832 5.37A8.99 8.99 0 0 0 21 14v-4a9 9 0 0 0-9-9m0 3a6 6 0 0 1 6 6v1h-2v-1a4 4 0 0 0-6.614-3.028L7.97 5.555A5.98 5.98 0 0 1 12 4"
        />
      </svg>
    );
  },
);

export default ProFingerprint2Fill;

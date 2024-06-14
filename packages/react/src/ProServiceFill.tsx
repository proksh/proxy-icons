import * as React from "react";
import { IconProps } from "./types";

export const ProServiceFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.469 4.357 8.096 7.73a3 3 0 0 0-.166 4.062l.264.31a3 3 0 0 0 4.408.18l1.864-1.864 4.246 4.669-6.714 6.712-8.485-8.485a6 6 0 0 1 7.956-8.957"
        />
        <path
          fill={color}
          d="M15.543 3.112 9.51 9.144a1 1 0 0 0-.056 1.354l.263.31a1 1 0 0 0 1.47.06l1.864-1.864a2 2 0 0 1 2.894.069l4.182 4.598.358-.357a6 6 0 0 0-4.943-10.202"
        />
      </svg>
    );
  },
);

export default ProServiceFill;

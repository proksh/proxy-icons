import * as React from "react";
import { IconProps } from "./types";

export const ProSeedlingFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3v1c0 3.18.489 5.584 2.213 7.107 1.36 1.201 3.325 1.698 5.88 1.844.177-1.653.677-3.304 2.03-4.588q.225-.214.472-.406c-.261-.96-.684-1.83-1.36-2.563C9.685 3.709 7.054 3 3 3zm20 5V7h-1c-4.03 0-6.637.613-8.189 2.088C11.227 10.592 11 12.748 11 15v6h2v-5.01c2.985-.068 5.228-.47 6.736-1.636C21.5 12.992 22 10.818 22 8"
        />
      </svg>
    );
  },
);

export default ProSeedlingFill;

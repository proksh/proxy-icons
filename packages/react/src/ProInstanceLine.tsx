import * as React from "react";
import { IconProps } from "./types";

export const ProInstanceLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 12.566V17.5h-2v-4.934L6.485 9.857l1.03-1.714L12 10.833l4.485-2.69 1.03 1.714z"
        />
        <path
          fill={color}
          d="M11.5 1.134h1l8.66 5 .5.866v10l-.5.866-8.66 5h-1l-8.66-5-.5-.866V7l.5-.866zm.5 2.02L4.34 7.578v8.846L12 20.845l7.66-4.422V7.577z"
        />
      </svg>
    );
  },
);

export default ProInstanceLine;

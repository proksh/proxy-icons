import * as React from "react";
import { IconProps } from "./types";

export const ProFilterOffLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6 3 12 12 1.414-1.414-12-12zm15.276 2.63-3.133 3.856-1.422-1.421L18.4 6h-3.742l-2-2H20.5z"
        />
        <path
          fill={color}
          d="m13.224 12.37.962-1.184 1.421 1.422-.607.747V21l-1 1h-4l-1-1v-7.645L2.724 5.631 3.5 4H7l2 2H5.601l5.175 6.37L11 13v7h2v-7z"
        />
      </svg>
    );
  },
);

export default ProFilterOffLine;

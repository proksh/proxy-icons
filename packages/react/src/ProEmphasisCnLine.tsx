import * as React from "react";
import { IconProps } from "./types";

export const ProEmphasisCnLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 4V2h-2v2H5v2h9.891c-.57 1.529-1.514 3.19-2.801 4.703A19.4 19.4 0 0 1 10.127 8H7.852c.576 1.18 1.565 2.69 2.845 4.15-1.506 1.378-3.342 2.517-5.477 3.14l.56 1.92c2.476-.722 4.586-2.034 6.305-3.619 1.699 1.604 3.807 3.038 6.172 3.63l.485-1.941c-1.919-.48-3.727-1.677-5.264-3.124C15.195 10.18 16.383 7.967 17.006 6H19V4zM8 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m11 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProEmphasisCnLine;

import * as React from "react";
import { IconProps } from "./types";

export const ProDragMoveLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 2.086 4.207 4.207-1.414 1.414L12 4.914 9.207 7.707 7.793 6.293zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6.207 5.707L12 21.914l4.207-4.207-1.414-1.414L12 19.086l-2.793-2.793zM19.086 12l-2.793-2.793 1.414-1.414L21.914 12l-4.207 4.207-1.414-1.414zM6.293 7.793 2.086 12l4.207 4.207 1.414-1.414L4.914 12l2.793-2.793z"
        />
      </svg>
    );
  },
);

export default ProDragMoveLine;

import * as React from "react";
import { IconProps } from "./types";

export const ProDragMove2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 2.086 4.207 4.207-1.414 1.414L13 5.914V11h5.086l-1.793-1.793 1.414-1.414L21.914 12l-4.207 4.207-1.414-1.414L18.086 13H13v5.086l1.793-1.793 1.414 1.414L12 21.914l-4.207-4.207 1.414-1.414L11 18.086V13H5.914l1.793 1.793-1.414 1.414L2.086 12l4.207-4.207 1.414 1.414L5.914 11H11V5.914L9.207 7.707 7.793 6.293z"
        />
      </svg>
    );
  },
);

export default ProDragMove2Line;

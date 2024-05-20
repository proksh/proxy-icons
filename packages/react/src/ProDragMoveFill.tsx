import * as React from "react";
import { IconProps } from "./types";

export const ProDragMoveFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11.293 2.793-3 3L9 7.5h6l.707-1.707-3-3zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-5 4.5-.707 1.707 3 3h1.414l3-3L15 16.5zm9.207-8.207L16.5 9v6l1.707.707 3-3v-1.414zm-12.414 0-3 3v1.414l3 3L7.5 15V9z"
        />
      </svg>
    );
  },
);

export default ProDragMoveFill;

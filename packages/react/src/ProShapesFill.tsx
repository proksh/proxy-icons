import * as React from "react";
import { IconProps } from "./types";

export const ProShapesFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.83 10.75 12.2 1l-5.629 9.75zM17.5 13a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-6.5.5H3v8h8z"
        />
      </svg>
    );
  },
);

export default ProShapesFill;

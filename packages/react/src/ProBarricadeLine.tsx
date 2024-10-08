import * as React from "react";
import { IconProps } from "./types";

export const ProBarricadeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.83 3H8.17l-3 16H3v2h18v-2h-2.17zm.966 16h-9.59l.656-3.5h8.277zm-1.782-9.5.75 4H8.237l.75-4zm-.375-2H9.362L9.83 5h4.34z"
        />
      </svg>
    );
  },
);

export default ProBarricadeLine;

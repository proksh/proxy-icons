import * as React from "react";
import { IconProps } from "./types";

export const ProThumbDownLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12.3 22.6-1.4.2-2-1.5-.365-1.063L9.691 16H2l-1-1v-3.5l.072-.371 3-7.5L5 3h17l1 1v10l-1 1h-4zm-1-2 5.4-7.2.3-.15V5H5.677L3 11.693V14h8l.965 1.263-1.322 4.845zM19 5v8h2V5z"
        />
      </svg>
    );
  },
);

export default ProThumbDownLine;

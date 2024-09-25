import * as React from "react";
import { IconProps } from "./types";

export const ProThumbDownFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12.322 22.57-1.422.23-2-1.5-.365-1.063L9.691 16H2l-1-1v-3.5l.072-.371 3-7.5L5 3h11l1 1v11.5l-.178.57zM22 15l1-1V4l-1-1h-3v12z"
        />
      </svg>
    );
  },
);

export default ProThumbDownFill;

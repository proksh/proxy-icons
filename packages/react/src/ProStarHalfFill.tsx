import * as React from "react";
import { IconProps } from "./types";

export const ProStarHalfFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 5.388-1.913 4.148-.79.574-4.537.538 3.354 3.101.302.93-.89 4.48 3.986-2.232h.976l3.986 2.232-.89-4.48.302-.93 3.354-3.101-4.536-.538-.79-.574zM8.505 8.19l2.587-5.609h1.816l2.587 5.609 6.133.727.561 1.727-4.534 4.193 1.204 6.058-1.47 1.068L12 18.946l-5.39 3.017-1.469-1.068 1.204-6.058-4.535-4.193.562-1.727z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill={color}
          d="M12 3v14.8l-5.878 3.29 1.313-6.607L2.489 9.91l6.69-.793z"
        />
      </svg>
    );
  },
);

export default ProStarHalfFill;

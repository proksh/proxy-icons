import * as React from "react";
import { IconProps } from "./types";

export const ProSipFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.328 5.947-1.767-1.768-1.415 1.414 7.071 7.071 1.415-1.414-1.768-1.768 2.828-2.828V5.24l-2.121-2.122h-1.415zM2.673 16.895l8.552-8.552 4.243 4.243-8.553 8.552-3.727-.516z"
        />
      </svg>
    );
  },
);

export default ProSipFill;

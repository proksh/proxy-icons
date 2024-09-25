import * as React from "react";
import { IconProps } from "./types";

export const ProSortNumberAscLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.553 2.606-3 1.5.894 1.788L7 5.118V11h2V3.5zM19 17.086l1.793-1.793 1.414 1.414L18 20.914l-4.207-4.207 1.414-1.414L17 17.086V4h2zM8 12.25a3.25 3.25 0 0 0-.57 6.45L5.953 21H8.33l2.336-3.64A3.25 3.25 0 0 0 8 12.25M6.75 15.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
        />
      </svg>
    );
  },
);

export default ProSortNumberAscLine;

import * as React from "react";
import { IconProps } from "./types";

export const ProSailboatLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4.226 14.367 9-11L15 4v11l-1 1H5zM7.11 14H13V6.801zM2 18h19.618l-1.724 3.447L19 22H5.5l-.8-.4z"
        />
      </svg>
    );
  },
);

export default ProSailboatLine;

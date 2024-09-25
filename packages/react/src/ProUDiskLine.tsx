import * as React from "react";
import { IconProps } from "./types";

export const ProUDiskLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M9 8V6h2v2zm4-2v2h2V6z" />
        <path
          fill={color}
          d="M19 2H5v8H4l-1 1v10l1 1h16l1-1V11l-1-1h-1zm-2 8H7V4h10zM5 12h14v8H5z"
        />
      </svg>
    );
  },
);

export default ProUDiskLine;

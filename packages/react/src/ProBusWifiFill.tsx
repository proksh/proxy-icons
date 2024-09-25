import * as React from "react";
import { IconProps } from "./types";

export const ProBusWifiFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-1.63-.784A4.14 4.14 0 0 0 18.433 3.5 4.14 4.14 0 0 0 15.5 4.715l1.06 1.061A2.64 2.64 0 0 1 18.436 5c.731 0 1.394.297 1.874.776zm-1.6 1.598a1.88 1.88 0 0 0-1.335-.553c-.522 0-.994.212-1.336.553l1.336 1.336z"
        />
        <path
          fill={color}
          d="M4 3h9.6a5.5 5.5 0 0 0-.578 2H5v7h14v-1.022a5.5 5.5 0 0 0 2-.578V19l-1 1h-.5v2h-3v-2h-9v2h-3v-2H4l-1-1v-7H2V8h1V4zm2 12v2h4v-2zm8 0v2h4v-2z"
        />
      </svg>
    );
  },
);

export default ProBusWifiFill;

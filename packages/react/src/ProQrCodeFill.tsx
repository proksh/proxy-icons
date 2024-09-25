import * as React from "react";
import { IconProps } from "./types";

export const ProQrCodeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 3 3 4v6l1 1h6l1-1V4l-1-1zm2 3h2v2H6zm-2 7-1 1v6l1 1h6l1-1v-6l-1-1zm2 3h2v2H6zm8-13-1 1v6l1 1h6l1-1V4l-1-1zm4 3v2h-2V6zm-2 7h-3v3h3v1h-1v1h-2v3h2v-2h2v2h4v-4h-2v2h-2v-2h1v-2h3v-2h-3v2h-2z"
        />
      </svg>
    );
  },
);

export default ProQrCodeFill;

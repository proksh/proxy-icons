import * as React from "react";
import { IconProps } from "./types";

export const ProQrCodeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M6 6h2v2H6z" />
        <path
          fill={color}
          d="m3 4 1-1h6l1 1v6l-1 1H4l-1-1zm2 1v4h4V5zm3 11H6v2h2z"
        />
        <path
          fill={color}
          d="m3 14 1-1h6l1 1v6l-1 1H4l-1-1zm2 1v4h4v-4zm11-9h2v2h-2z"
        />
        <path
          fill={color}
          d="m14 3-1 1v6l1 1h6l1-1V4l-1-1zm1 6V5h4v4zm1 4h-3v3h3v1h-1v1h-2v3h2v-2h2v2h4v-4h-2v2h-2v-2h1v-2h3v-2h-3v2h-2z"
        />
      </svg>
    );
  },
);

export default ProQrCodeLine;

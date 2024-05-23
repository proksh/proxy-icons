import * as React from "react";
import { IconProps } from "./types";

export const ProExternalLinkLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.586 5H13V3h8v8h-2V6.414l-7.793 7.793-1.414-1.414z"
        />
        <path fill={color} d="m3 7 1-1h6v2H5v11h11v-5h2v6l-1 1H4l-1-1z" />
      </svg>
    );
  },
);

export default ProExternalLinkLine;

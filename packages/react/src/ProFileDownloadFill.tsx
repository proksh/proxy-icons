import * as React from "react";
import { IconProps } from "./types";

export const ProFileDownloadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086V22H3zm10.261 10h2.752l-4.012 4-3.991-4h2.751V7.992h2.5z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProFileDownloadFill;

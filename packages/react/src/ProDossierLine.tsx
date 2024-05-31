import * as React from "react";
import { IconProps } from "./types";

export const ProDossierLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M11 13v-2h2v2h2v2h-2v2h-2v-2H9v-2z" />
        <path
          fill={color}
          d="M8 2 7 3v1H3v18h18V4h-4V3l-1-1zm9 4h2v14H5V6h2v1l1 1h8l1-1zM9 6V4h6v2z"
        />
      </svg>
    );
  },
);

export default ProDossierLine;

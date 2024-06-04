import * as React from "react";
import { IconProps } from "./types";

export const ProPrinterCloudFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 2 6 3v3h12V3l-1-1zm15 5H2v12h3v-4h9.235a4.8 4.8 0 0 1 3.899-2 4.79 4.79 0 0 1 3.855 1.94l.011.003zM8 12H5v-2h3z"
        />
        <path
          fill={color}
          d="M7 17h5.668a4.1 4.1 0 0 0-1.053 4H7zm6.467 2.9a2.1 2.1 0 0 0 2.1 2.1H21.4a2.333 2.333 0 0 0 2.33-2.447q.004-.06.003-.12a2.568 2.568 0 0 0-2.949-2.538A2.81 2.81 0 0 0 18.134 15a2.8 2.8 0 0 0-2.8 2.8v.013a2.1 2.1 0 0 0-1.867 2.087"
        />
      </svg>
    );
  },
);

export default ProPrinterCloudFill;

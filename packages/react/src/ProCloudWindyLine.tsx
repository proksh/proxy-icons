import * as React from "react";
import { IconProps } from "./types";

export const ProCloudWindyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.733 7.384A5 5 0 0 0 6 9l.002.923-.892.098A3.5 3.5 0 0 0 2.035 14H.022a5.5 5.5 0 0 1 4.023-5.805 7.001 7.001 0 0 1 13.282-2.193L17.5 6a6.5 6.5 0 0 1 6.495 6.755Q24 12.877 24 13a6 6 0 0 1-6 6h-4v-2h4a4 4 0 0 0 3.995-4.196l-.002-.047.002-.047q.005-.105.005-.21a4.5 4.5 0 0 0-5.172-4.45l-.825.123zM16 20v2H6v-2z"
        />
        <path fill={color} d="M12 16H2v2h10z" />
      </svg>
    );
  },
);

export default ProCloudWindyLine;

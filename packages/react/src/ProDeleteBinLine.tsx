import * as React from "react";
import { IconProps } from "./types";

export const ProDeleteBinLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7 3 1-1h8l1 1v2h5v2H2V5h5zm8 1v1H9V4z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path fill={color} d="M9 18v-6h2v6zm4-6v6h2v-6z" />
        <path
          fill={color}
          d="M5 8 4 9v12l1 1h14l1-1V9l-1-1zm1 12V10h12v10z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProDeleteBinLine;
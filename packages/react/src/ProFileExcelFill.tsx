import * as React from "react";
import { IconProps } from "./types";

export const ProFileExcelFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086V22H3zm13.021 6H13.58L12 10.256 10.42 8H7.98l2.8 4-2.8 4h2.441l1.58-2.256L13.58 16h2.44l-2.8-4z"
        />
      </svg>
    );
  },
);

export default ProFileExcelFill;

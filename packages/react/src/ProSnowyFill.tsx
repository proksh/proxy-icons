import * as React from "react";
import { IconProps } from "./types";

export const ProSnowyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 2a7 7 0 0 1 6.327 4.002L17.5 6a6.5 6.5 0 0 1 6.495 6.755Q24 12.877 24 13a6 6 0 0 1-6 6h-.777l.138-.24-1.33-.76 1.33-.76-1.985-3.473-1.376.787V13h-4v1.554l-1.376-.787L6.64 17.24l1.329.76-1.33.76.138.24H5.5A5.5 5.5 0 0 1 4.046 8.195 7 7 0 0 1 11 2"
        />
        <path
          fill={color}
          d="M11 19.723V22h2v-2.277l2.004 1.145.992-1.736L14.016 18l1.98-1.132-.992-1.736L13 16.277V14h-2v2.277l-2.004-1.145-.992 1.736L9.984 18l-1.98 1.132.992 1.736z"
        />
      </svg>
    );
  },
);

export default ProSnowyFill;

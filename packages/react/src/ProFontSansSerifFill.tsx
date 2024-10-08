import * as React from "react";
import { IconProps } from "./types";

export const ProFontSansSerifFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.6 21v-1.056l2.064-.792V5.736L5.6 5.352V4.2h13.344l.288 4.872h-1.008l-2.952-3.6h-3.696v6.216h5.544v1.56h-5.544v6.24l2.064.36V21z"
        />
      </svg>
    );
  },
);

export default ProFontSansSerifFill;

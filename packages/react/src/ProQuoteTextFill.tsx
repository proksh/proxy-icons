import * as React from "react";
import { IconProps } from "./types";

export const ProQuoteTextFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 6.5H3v-3h18zm-18 4v10h3v-10zm5 10h13v-3H8zm0-7h13v-3H8z"
        />
      </svg>
    );
  },
);

export default ProQuoteTextFill;

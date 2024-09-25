import * as React from "react";
import { IconProps } from "./types";

export const ProQuoteTextLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21 6H3V4h18zM3 11v9h2v-9zm5 9h13v-2H8zm0-7h13v-2H8z"
        />
      </svg>
    );
  },
);

export default ProQuoteTextLine;

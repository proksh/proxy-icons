import * as React from "react";
import { IconProps } from "./types";

export const ProMessengerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.625 11.5a9.375 9.375 0 1 1 6.924 9.051l-1.928 1.102a1 1 0 0 1-1.496-.868v-1.979a9.36 9.36 0 0 1-3.5-7.306m3.74 2.815 3.058-4.892a1 1 0 0 1 1.448-.27l2.496 1.872a1 1 0 0 0 1.24-.031l2.744-2.287c.444-.37 1.056.181.736.662l-3.461 5.192a1 1 0 0 1-1.483.205L11.1 13.014a1 1 0 0 0-1.24-.05l-2.777 2.02c-.444.324-1.01-.203-.718-.669"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProMessengerFill;

import * as React from "react";
import { IconProps } from "./types";

export const ProMessengerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m6.365 14.315 3.058-4.892a1 1 0 0 1 1.448-.27l2.496 1.872a1 1 0 0 0 1.24-.031l2.744-2.287c.444-.37 1.056.181.736.662l-3.461 5.192a1 1 0 0 1-1.483.205L11.1 13.014a1 1 0 0 0-1.24-.05l-2.777 2.02c-.444.324-1.01-.203-.718-.669"
        />
        <path
          fill={color}
          d="M12 2.125a9.375 9.375 0 0 0-5.875 16.681v1.979a1 1 0 0 0 1.496.868L9.55 20.55A9.375 9.375 0 1 0 12 2.125M4.375 11.5a7.625 7.625 0 1 1 5.373 7.287 1 1 0 0 0-.792.087l-1.081.618v-1.054c0-.32-.154-.618-.406-.804A7.61 7.61 0 0 1 4.375 11.5"
        />
      </svg>
    );
  },
);

export default ProMessengerLine;

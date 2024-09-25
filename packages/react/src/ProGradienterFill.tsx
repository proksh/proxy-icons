import * as React from "react";
import { IconProps } from "./types";

export const ProGradienterFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.96 12.896A10 10 0 0 0 21.95 11c-.5-5.053-4.764-9-9.95-9s-9.449 3.947-9.95 9A10 10 0 0 0 2 12q0 .507.05 1c.501 5.053 4.765 9 9.95 9s9.449-3.947 9.95-9zM4 12q0-.508.062-1h4.064a4 4 0 0 0 0 2H4.062A8 8 0 0 1 4 12m16 0q0 .508-.062 1h-4.064a4 4 0 0 0 0-2h4.064q.062.492.062 1m-6.342-1.118A2 2 0 1 1 10.268 13 2 2 0 0 1 10 12a2 2 0 0 1 3.658-1.118"
        />
      </svg>
    );
  },
);

export default ProGradienterFill;

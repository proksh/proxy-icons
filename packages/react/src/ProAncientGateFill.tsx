import * as React from "react";
import { IconProps } from "./types";

export const ProAncientGateFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.402 3H6.597l-.123.858a2.5 2.5 0 0 1-2.286 2.135l-1.58.117.785 1.376A3 3 0 0 0 6 9h12a3 3 0 0 0 2.606-1.514l.786-1.376-1.58-.117a2.5 2.5 0 0 1-2.287-2.135zm1.247 7H5.35l-.299.428a2.5 2.5 0 0 1-2.743.975L.757 10.96l.292 1.587A3 3 0 0 0 3 14.829V21h6v-3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3h6v-6.17a3 3 0 0 0 1.951-2.284l.293-1.587-1.552.444a2.5 2.5 0 0 1-2.744-.975z"
        />
      </svg>
    );
  },
);

export default ProAncientGateFill;

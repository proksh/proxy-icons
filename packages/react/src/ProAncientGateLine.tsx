import * as React from "react";
import { IconProps } from "./types";

export const ProAncientGateLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.402 3H6.597l-.123.858a2.5 2.5 0 0 1-2.286 2.135l-1.58.117.785 1.376A3 3 0 0 0 6 9h12a3 3 0 0 0 2.606-1.514l.786-1.376-1.58-.117a2.5 2.5 0 0 1-2.287-2.135zM6.828 7a4.5 4.5 0 0 0 1.415-2h7.513a4.5 4.5 0 0 0 1.415 2zm11.821 3H5.35l-.299.428a2.5 2.5 0 0 1-2.743.975L.757 10.96l.292 1.587A3 3 0 0 0 3 14.829V21h6v-3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3h6v-6.17a3 3 0 0 0 1.951-2.284l.293-1.587-1.552.444a2.5 2.5 0 0 1-2.744-.975zm-13.65 3.032A4.5 4.5 0 0 0 6.355 12h11.292c.38.424.838.776 1.354 1.032V19h-2v-1a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4v1H5z"
        />
      </svg>
    );
  },
);

export default ProAncientGateLine;

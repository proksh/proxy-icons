import * as React from "react";
import { IconProps } from "./types";

export const ProBuilding2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 21v-2h2V5.316l11-4.278v5.267l7 2.6V19h2v2zm11-2V3.962L5 6.684V19zm7 0v-8.313l-5-1.923V19z"
        />
      </svg>
    );
  },
);

export default ProBuilding2Line;

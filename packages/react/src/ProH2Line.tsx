import * as React from "react";
import { IconProps } from "./types";

export const ProH2Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 21h2v-8h7v8h2V4h-2v7H4V4H2zm16.75-10.5A1.75 1.75 0 0 0 17 12.25v.25h-2v-.25a3.75 3.75 0 1 1 7.5 0v.178a3.93 3.93 0 0 1-.93 2.537L18.157 19H22.5v2h-7v-1.957l4.544-5.37c.294-.348.456-.79.456-1.245v-.178a1.75 1.75 0 0 0-1.75-1.75"
        />
      </svg>
    );
  },
);

export default ProH2Line;

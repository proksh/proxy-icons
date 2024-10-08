import * as React from "react";
import { IconProps } from "./types";

export const ProLifebuoyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8c-1.504 0-2.91.415-4.113 1.137l1.545 2.572C10.182 7.259 11.06 7 12 7s1.818.259 2.569.71l1.544-2.573A7.96 7.96 0 0 0 12 4m4.29 5.432c.451.75.71 1.629.71 2.568s-.259 1.818-.71 2.568l2.573 1.545A7.96 7.96 0 0 0 20 12c0-1.504-.415-2.91-1.137-4.113zm-1.72 6.858c-.751.45-1.63.709-2.569.709a5 5 0 0 1-2.568-.709l-1.545 2.572A7.96 7.96 0 0 0 12 20a7.96 7.96 0 0 0 4.113-1.137zm-6.86-1.723C7.26 13.819 7 12.94 7 12s.259-1.818.71-2.568L5.136 7.887A7.96 7.96 0 0 0 4 12c0 1.504.415 2.911 1.137 4.113zM9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
        />
      </svg>
    );
  },
);

export default ProLifebuoyLine;

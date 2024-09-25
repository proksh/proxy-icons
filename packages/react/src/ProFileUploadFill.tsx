import * as React from "react";
import { IconProps } from "./types";

export const ProFileUploadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086V22H3zm10.25 9.996H16L11.99 8 8 11.996h2.75V16h2.5z"
        />
      </svg>
    );
  },
);

export default ProFileUploadFill;

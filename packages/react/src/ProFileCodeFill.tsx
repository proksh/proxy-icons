import * as React from "react";
import { IconProps } from "./types";

export const ProFileCodeFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 2h12.914L21 7.086V22H3zm6.793 7.293L6.086 13l3.707 3.707 1.414-1.414L8.914 13l2.293-2.293zm3.914 0-1.414 1.414L14.586 13l-2.293 2.293 1.414 1.414L17.414 13z"
        />
      </svg>
    );
  },
);

export default ProFileCodeFill;

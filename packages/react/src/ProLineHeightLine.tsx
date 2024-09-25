import * as React from "react";
import { IconProps } from "./types";

export const ProLineHeightLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.207 7.293 5 3.086.793 7.293l1.414 1.414L4 6.914V11h2V6.914l1.793 1.793zM11 4h10v2H11zm-2 7h12v2H9zm12 7H11v2h10zm-17-.914V13h2v4.086l1.792-1.793 1.415 1.414L5 20.914.792 16.707l1.415-1.414z"
        />
      </svg>
    );
  },
);

export default ProLineHeightLine;

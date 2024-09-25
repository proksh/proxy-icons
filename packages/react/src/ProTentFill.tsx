import * as React from "react";
import { IconProps } from "./types";

export const ProTentFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1.496 22.078 19H24v2H0v-2h1.922zM10.174 19h3.652L12 15.61z"
        />
      </svg>
    );
  },
);

export default ProTentFill;

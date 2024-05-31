import * as React from "react";
import { IconProps } from "./types";

export const ProSpam3Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m15.73 2.444 5.456 5.457v7.716l-5.457 5.457H8.012l-5.456-5.457V7.901l5.456-5.457zM8 13h8v-2H8z"
        />
      </svg>
    );
  },
);

export default ProSpam3Fill;

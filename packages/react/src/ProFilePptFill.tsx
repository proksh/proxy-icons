import * as React from "react";
import { IconProps } from "./types";

export const ProFilePptFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M14 13h-4v-2h4z" />
        <path fill={color} d="M3 2h12.914L21 7.086V22H3zm13 7H8v8h2v-2h6z" />
      </svg>
    );
  },
);

export default ProFilePptFill;

import * as React from "react";
import { IconProps } from "./types";

export const ProHome6Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m12 1.75 9 6.75V21H3V8.5zM16 17v-2H8v2z" />
        <path fill={color} d="m12 1.75 9 6.75V21H3V8.5zM16 17v-2H8v2z" />
        <path fill={color} d="m12 1.75 9 6.75V21H3V8.5zM16 17v-2H8v2z" />
        <path fill={color} d="m12 1.75 9 6.75V21H3V8.5zM16 17v-2H8v2z" />
      </svg>
    );
  },
);

export default ProHome6Fill;

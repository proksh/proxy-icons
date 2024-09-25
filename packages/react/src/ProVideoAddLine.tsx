import * as React from "react";
import { IconProps } from "./types";

export const ProVideoAddLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M8 11V8h2v3h3v2h-3v3H8v-3H5v-2z" />
        <path
          fill={color}
          d="M17 4H1v16h16v-5.132l6 4V5.132l-6 4zm0 7.535 4-2.667v6.264l-4-2.667zM15 6v12H3V6z"
        />
      </svg>
    );
  },
);

export default ProVideoAddLine;

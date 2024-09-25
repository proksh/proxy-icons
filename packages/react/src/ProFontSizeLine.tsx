import * as React from "react";
import { IconProps } from "./types";

export const ProFontSizeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m4.814 15-2.031 5H.624l6.45-15.876h1.853L15.377 20h-2.16l-2.03-5zm.813-2h4.747L8 7.157zM19 12c.729 0 1.412.195 2 .535V12h2v8h-2v-.535A4 4 0 1 1 19 12m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        />
      </svg>
    );
  },
);

export default ProFontSizeLine;

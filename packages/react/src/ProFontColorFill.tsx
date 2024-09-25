import * as React from "react";
import { IconProps } from "./types";

export const ProFontColorFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.15 14.5 7.728 18H4.49l6.12-15.065h2.78L19.51 18h-3.24l-1.421-3.5zm1.219-3h3.262L12 7.485zM21 19.5H3v3h18z"
        />
      </svg>
    );
  },
);

export default ProFontColorFill;

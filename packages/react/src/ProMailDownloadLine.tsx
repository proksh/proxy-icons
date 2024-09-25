import * as React from "react";
import { IconProps } from "./types";

export const ProMailDownloadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3H2v18h12v-2H4V7.227l8 7.111 8-7.11V12h2zm-2.505 2L12 11.662 4.506 5z"
        />
        <path
          fill={color}
          d="M18 18.086V14h2v4.086l.793-.793 1.414 1.414L19 21.914l-3.207-3.207 1.414-1.414z"
        />
      </svg>
    );
  },
);

export default ProMailDownloadLine;

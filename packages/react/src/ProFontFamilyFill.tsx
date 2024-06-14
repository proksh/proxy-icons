import * as React from "react";
import { IconProps } from "./types";

export const ProFontFamilyFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.275 16.5 5.918 22H2.654L10.62 3.41h2.758L21.346 22h-3.264l-2.357-5.5zm1.286-3h4.879L12 7.808z"
        />
      </svg>
    );
  },
);

export default ProFontFamilyFill;

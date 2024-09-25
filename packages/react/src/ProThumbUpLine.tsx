import * as React from "react";
import { IconProps } from "./types";

export const ProThumbUpLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11.7 1.4 1.4-.2 2 1.5.365 1.063L14.309 8H22l1 1v3.5l-.072.371-3 7.5L19 21H2l-1-1V10l1-1h4zm1 2-5.4 7.2-.3.15V19h11.323L21 12.307V10h-8l-.965-1.263 1.322-4.845zM5 19v-8H3v8z"
        />
      </svg>
    );
  },
);

export default ProThumbUpLine;

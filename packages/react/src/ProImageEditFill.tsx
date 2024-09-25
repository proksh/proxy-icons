import * as React from "react";
import { IconProps } from "./types";

export const ProImageEditFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22 3H2v18h20v-8.093l-2 2V19h-.086l-2.004-2.004-1.445 1.446h-4.362l.253-4.376 1.312-1.312L10 9.086l-6 6V5h16v1.421l2-2z"
        />
        <path
          fill={color}
          d="m22 7.25-7.691 7.691-.087 1.501h1.414l7.778-7.778zM14 8.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"
        />
      </svg>
    );
  },
);

export default ProImageEditFill;

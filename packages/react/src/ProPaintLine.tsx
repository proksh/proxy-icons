import * as React from "react";
import { IconProps } from "./types";

export const ProPaintLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.793 2.707 9.586 4.5l-8.5 8.5L11 22.914 20.914 13 9.207 1.293zM3.914 13 11 5.914 18.086 13 11 20.086zM20.5 23c1.38 0 2.5-1.102 2.5-2.462C23 19.18 20.5 17 20.5 17S18 19.179 18 20.538C18 21.899 19.12 23 20.5 23"
        />
      </svg>
    );
  },
);

export default ProPaintLine;

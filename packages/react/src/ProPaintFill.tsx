import * as React from "react";
import { IconProps } from "./types";

export const ProPaintFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.586 4.5 7.793 2.707l1.414-1.414L20.914 13 11 22.914 1.086 13zM11 5.914 3.914 13h14.172zM20.5 23c1.38 0 2.5-1.102 2.5-2.462C23 19.18 20.5 17 20.5 17S18 19.179 18 20.538C18 21.899 19.12 23 20.5 23"
        />
      </svg>
    );
  },
);

export default ProPaintFill;

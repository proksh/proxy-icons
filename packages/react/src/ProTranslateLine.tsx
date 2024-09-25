import * as React from "react";
import { IconProps } from "./types";

export const ProTranslateLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 14v-3H2V4h4V2h2v2h4v7H8v3zM4 6v3h6V6zm3 15h3v-2H7a2 2 0 0 1-2-2v-2H3v2a4 4 0 0 0 4 4m13.16 0-1.154-3h-4.011l-1.154 3h-2.143l4.37-11.359h1.866L22.303 21zM17 12.786 15.764 16h2.473zM17 3h-3v2h3a2 2 0 0 1 2 2v2h2V7a4 4 0 0 0-4-4"
        />
      </svg>
    );
  },
);

export default ProTranslateLine;

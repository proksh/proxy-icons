import * as React from "react";
import { IconProps } from "./types";

export const ProTranslateFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 14v-3H2V4h4V2h2v2h4v7H8v3zM4 6v3h6V6zm3 15.5h3v-3H7A1.5 1.5 0 0 1 5.5 17v-2h-3v2A4.5 4.5 0 0 0 7 21.5m13.16-.5-1.154-3h-4.011l-1.154 3h-2.143l4.37-11.359h1.866L22.303 21zM17 12.786 15.764 16h2.473zM17 2.5h-3v3h3A1.5 1.5 0 0 1 18.5 7v2h3V7A4.5 4.5 0 0 0 17 2.5"
        />
      </svg>
    );
  },
);

export default ProTranslateFill;

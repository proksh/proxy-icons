import * as React from "react";
import { IconProps } from "./types";

export const ProMoonClearFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m14.586 1.65.14-.65h.548l.14.65a2.52 2.52 0 0 0 1.935 1.936l.651.14v.548l-.65.14a2.52 2.52 0 0 0-1.936 1.935l-.14.651h-.548l-.14-.65a2.52 2.52 0 0 0-1.935-1.936L12 4.274v-.548l.65-.14a2.52 2.52 0 0 0 1.936-1.935m5 4.999.14-.65h.548l.14.65a2.52 2.52 0 0 0 1.935 1.936l.651.14v.548l-.65.14a2.52 2.52 0 0 0-1.936 1.935l-.14.651h-.548l-.14-.65a2.52 2.52 0 0 0-1.935-1.936L17 9.274v-.548l.65-.14a2.52 2.52 0 0 0 1.936-1.935M9.102 3.473a9 9 0 1 0 11.421 11.421l-1.269-1.268a7 7 0 0 1-2.254.37 7 7 0 0 1-6.63-9.254z"
        />
      </svg>
    );
  },
);

export default ProMoonClearFill;

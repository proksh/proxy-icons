import * as React from "react";
import { IconProps } from "./types";

export const ProStrikethroughFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 5.5C9.737 5.5 8.5 6.914 8.5 8c0 .435.268.907 1.028 1.414.74.493 1.663.817 2.272.99.142.04.282.076.446.117l.122.03a12 12 0 0 1 1.425.449H6.767C6.064 10.266 5.5 9.278 5.5 8c0-3.333 3.24-5.5 6.5-5.5 1.207 0 2.46.277 3.543.754 1.06.466 2.116 1.196 2.74 2.222l-2.565 1.557c-.188-.309-.641-.706-1.384-1.033A6 6 0 0 0 12 5.5m9 6.5v2.5h-2.805c.19.447.305.946.305 1.5 0 3.333-3.24 5.5-6.5 5.5-1.143 0-2.37-.19-3.458-.593-1.061-.392-2.172-1.055-2.824-2.128l2.564-1.558c.159.261.558.598 1.3.872.713.264 1.582.407 2.418.407 2.263 0 3.5-1.414 3.5-2.5 0-.329-.233-.787-1.04-1.332a6 6 0 0 0-.264-.168H3V12z"
        />
      </svg>
    );
  },
);

export default ProStrikethroughFill;

import * as React from "react";
import { IconProps } from "./types";

export const ProMoonLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.032 6.228a7 7 0 1 0 9.736 9.736q-.38.032-.768.032a9 9 0 0 1-8.968-9.768M3 11.996a9 9 0 0 1 6.102-8.523l1.269 1.269a7 7 0 0 0 8.884 8.884l1.268 1.268A9 9 0 0 1 3 11.996"
        />
      </svg>
    );
  },
);

export default ProMoonLine;

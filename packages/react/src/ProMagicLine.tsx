import * as React from "react";
import { IconProps } from "./types";

export const ProMagicLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m3.93 4.714 1.904 5.163L2.428 14.2l.824 1.618 5.499-.215 3.058 4.575 1.793-.284 1.495-5.296 5.296-1.495.284-1.793-4.574-3.058.214-5.499-1.618-.824-4.322 3.405L5.214 3.43zM7.904 9.71 6.556 6.056l3.654 1.348.965-.153 3.06-2.41-.153 3.89.444.871 3.237 2.165-3.748 1.058-.69.69-1.058 3.748-2.165-3.237-.87-.444-3.892.152 2.41-3.059z"
        />
        <path
          fill={color}
          d="m16.182 17.096 4.243 4.243 1.414-1.414-4.243-4.243z"
        />
      </svg>
    );
  },
);

export default ProMagicLine;

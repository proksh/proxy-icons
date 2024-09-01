import * as React from "react";
import { IconProps } from "./types";

export const ProFoggyLine = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill={color}
          d="M15.72 7.384A5 5 0 0 0 5.988 9l.003.923-.893.098A3.5 3.5 0 0 0 2.023 13H.01a5.5 5.5 0 0 1 4.023-4.805 7.001 7.001 0 0 1 13.282-2.193L17.487 6a6.5 6.5 0 0 1 6.5 6.5v.5h-2v-.5a4.5 4.5 0 0 0-5.172-4.45l-.825.123zM3.987 19h17v2h-17zm19.981-4H.01v2h23.958z"
        />
      </svg>
    );
  },
);

export default ProFoggyLine;

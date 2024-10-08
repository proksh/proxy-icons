import * as React from "react";
import { IconProps } from "./types";

export const ProListOrderedLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3 4h1v2H3v1h3V6H5V3.5L4.5 3H3zm5 2h13V4H8zm0 7h13v-2H8zm13 7H8v-2h13zM3 11v-1h2.5l.5.5V12l-.5.5H4v.5h2v1H3v-2l.5-.5H5V11zm0 6v1h2v.5H3v1h2v.5H3v1h2.5l.5-.5v-3l-.5-.5z"
        />
      </svg>
    );
  },
);

export default ProListOrderedLine;

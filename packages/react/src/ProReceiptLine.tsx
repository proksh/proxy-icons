import * as React from "react";
import { IconProps } from "./types";

export const ProReceiptLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m9 3.798 3-2 3 2 3.034-2.023L21 4v12h2v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4l2.966-2.225zM8.83 20H20a1 1 0 0 0 1-1v-1H9v1c0 .35-.06.687-.17 1M7 16h12V5l-1.034-.776L15 6.203l-3-2-3 2-2.966-1.977L5 5v14a1 1 0 1 0 2 0z"
        />
      </svg>
    );
  },
);

export default ProReceiptLine;

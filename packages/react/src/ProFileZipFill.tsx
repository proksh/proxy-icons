import * as React from "react";
import { IconProps } from "./types";

export const ProFileZipFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2h9v20H3V2h7v2h2v2h-2v2h2v2h-2v2h2v2h-2v3h4v-5h-2v-2h2V8h-2V6h2V4h-2z"
        />
      </svg>
    );
  },
);

export default ProFileZipFill;

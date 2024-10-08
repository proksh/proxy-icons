import * as React from "react";
import { IconProps } from "./types";

export const ProQuestionMarkLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 2a6 6 0 0 0-6 6v1h2V8a4 4 0 0 1 4-4h.25a3.75 3.75 0 1 1 0 7.5H12l-1 1V17h2v-3.549A5.751 5.751 0 0 0 12.25 2zm0 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        />
      </svg>
    );
  },
);

export default ProQuestionMarkLine;

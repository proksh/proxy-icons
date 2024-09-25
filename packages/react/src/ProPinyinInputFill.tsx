import * as React from "react";
import { IconProps } from "./types";

export const ProPinyinInputFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.13 5.5h-1.26l-1.567-2.744-2.605 1.488.717 1.256H10v3h1.5v3H10v3h1.464a5.5 5.5 0 0 1-1.325 2.992l-1.768 2.02 2.258 1.976 1.768-2.02a8.5 8.5 0 0 0 2.08-4.968H16.5V21h3v-6.5H21v-3h-1.5v-3H21v-3h-1.415l.717-1.256-2.604-1.488zm-1.63 6v-3h2v3z"
        />
        <path
          fill={color}
          d="M4.5 18.5v-4.011l-1.5.428v-3.12l1.5-.429V8.5H3v-3h1.5V3h3v2.5H9v3H7.5v2.011l1.588-.453.824 2.884-2.412.69V19A2.5 2.5 0 0 1 5 21.5H3v-3z"
        />
      </svg>
    );
  },
);

export default ProPinyinInputFill;

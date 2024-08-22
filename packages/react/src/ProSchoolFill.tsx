import * as React from "react";
import { IconProps } from "./types";

export const ProSchoolFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m12 .586 6 6V9h4v10h1v2H1v-2h1V9h4V6.586zM18 19v-8h2v8zM6 11v8H4v-8zm5 1v7h2v-7z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSchoolFill;

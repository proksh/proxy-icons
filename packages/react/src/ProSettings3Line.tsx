import * as React from "react";
import { IconProps } from "./types";

export const ProSettings3Line = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.165 18.374-1.531 2.652 1.732 1 1.53-2.65A8 8 0 0 0 12 20c1.1 0 2.15-.222 3.104-.624l1.53 2.65 1.732-1-1.531-2.652A8 8 0 0 0 19.938 13H23v-2h-3.062a8 8 0 0 0-3.103-5.374l1.531-2.652-1.732-1-1.53 2.65A8 8 0 0 0 12 4c-1.1 0-2.15.222-3.104.624l-1.53-2.65-1.732 1 1.531 2.652A8 8 0 0 0 4.062 11H1v2h3.062a8 8 0 0 0 3.103 5.374m5.38-.398a6 6 0 0 0 1.548-.351 6 6 0 0 0 1.731-1.001A6 6 0 0 0 17.917 11a6 6 0 0 0-2.093-3.624A5.98 5.98 0 0 0 12 6a6 6 0 0 0-5.2 3.006l-.02.033A5.98 5.98 0 0 0 6.083 13a6 6 0 0 0 2.093 3.624 6 6 0 0 0 4.37 1.352M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProSettings3Line;

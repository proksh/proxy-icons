import * as React from "react";
import { IconProps } from "./types";

export const ProChatThreadLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.42 6h-2.006l-.167 2h-1.993l.167-2H9.414l-.167 2H7v2h2.08l-.166 2H7v2h1.747l-.167 2h2.007l.167-2h1.993l-.167 2h2.007l.167-2H17v-2h-2.08l.167-2H17V8h-1.746zm-2.506 6H10.92l.166-2h1.993z"
        />
        <path
          fill={color}
          d="M22 3H2v16h7.52L12 22.1l2.48-3.1H22zM4 17V5h16v12h-6.48L12 18.9 10.48 17z"
        />
      </svg>
    );
  },
);

export default ProChatThreadLine;

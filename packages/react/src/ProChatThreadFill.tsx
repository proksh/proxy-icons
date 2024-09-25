import * as React from "react";
import { IconProps } from "./types";

export const ProChatThreadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m12.914 12 .166-2h-1.993l-.166 2z" />
        <path
          fill={color}
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm13.42 3h-2.006l-.167 2h-1.993l.167-2H9.414l-.167 2H7v2h2.08l-.166 2H7v2h1.747l-.167 2h2.007l.167-2h1.993l-.167 2h2.007l.167-2H17v-2h-2.08l.167-2H17V8h-1.746z"
        />
      </svg>
    );
  },
);

export default ProChatThreadFill;

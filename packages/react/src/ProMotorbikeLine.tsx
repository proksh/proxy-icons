import * as React from "react";
import { IconProps } from "./types";

export const ProMotorbikeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 5h2.78l1 3h-3.583l-3 2H2v2h2v1.256A4.502 4.502 0 0 0 5.5 22a4.5 4.5 0 0 0 4.485-4.874l2.862-1.432L14.4 10h1.046l1.142 3.425A4.5 4.5 0 1 0 18.554 13l-1.333-4H20V6h-3.78l-1-3H11zm-5 8.028V12h2.803l3-2h.524l-1.174 4.306-1.785.892A4.5 4.5 0 0 0 6 13.028M5.5 20a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m13 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
        />
      </svg>
    );
  },
);

export default ProMotorbikeLine;

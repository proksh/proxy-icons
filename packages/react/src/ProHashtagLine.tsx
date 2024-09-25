import * as React from "react";
import { IconProps } from "./types";

export const ProHashtagLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.277 3h2.011l-.543 5H20v2h-3.472l-.435 4H20v2h-4.124l-.544 5H13.32l.544-5H9.875l-.543 5H7.32l.544-5H4v-2h4.081l.435-4H4V8h4.733l.544-5h2.012l-.544 5h3.988zm-.761 7h-3.988l-.435 4h3.988z"
        />
      </svg>
    );
  },
);

export default ProHashtagLine;

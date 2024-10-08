import * as React from "react";
import { IconProps } from "./types";

export const ProFilterOffLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.607 12.607 18 15l1.414-1.414-12-12L6 3l1 1H3.5l-.776 1.63L9 13.356V21l1 1h4l1-1v-7.645zm-1.421-1.421-.962 1.183L13 13v7h-2v-7l-.224-.63L5.601 6H9zM20.5 4h-7.843l2 2h3.742l-1.678 2.065 1.422 1.421 3.133-3.855z"
        />
      </svg>
    );
  },
);

export default ProFilterOffLine;

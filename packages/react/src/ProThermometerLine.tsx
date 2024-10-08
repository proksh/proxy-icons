import * as React from "react";
import { IconProps } from "./types";

export const ProThermometerLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m5.815 10.529 8.72-8.721a4 4 0 1 1 5.657 5.657l-8.72 8.72-4.95.708-3.3 3.3-1.414-1.415 3.3-3.3zm1.885.943-.471 3.3 3.3-.472.471-.472-1.414-1.414L11 11l1.414 1.414L13.83 11l-1.415-1.414 1.415-1.414 1.414 1.414 1.414-1.414-1.414-1.415 1.414-1.414 1.414 1.414.707-.707a2 2 0 1 0-2.828-2.828z"
        />
      </svg>
    );
  },
);

export default ProThermometerLine;

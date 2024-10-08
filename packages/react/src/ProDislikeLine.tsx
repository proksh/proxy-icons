import * as React from "react";
import { IconProps } from "./types";

export const ProDislikeLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.4 17.4 20 21l1.414-1.414-18-18L2 3l1.674 1.674q-.082.075-.16.154a6 6 0 0 0 0 8.486l8.485 8.485zm-1.415-1.415L12 18.971 4.928 11.9a4 4 0 0 1 .162-5.81zM11.999 4.828a5.98 5.98 0 0 0-4.271-1.757l4.43 4.43 1.257-1.258a4 4 0 0 1 5.657 5.656l-1.258 1.258 1.414 1.415 1.258-1.258a6 6 0 1 0-8.485-8.486v.002z"
        />
      </svg>
    );
  },
);

export default ProDislikeLine;

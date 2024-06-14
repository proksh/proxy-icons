import * as React from "react";
import { IconProps } from "./types";

export const ProServiceLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.072 6.243a4 4 0 0 0-5.657 0L10.12 9.538a1 1 0 0 0-.001 1.414l.035.034a1 1 0 0 0 1.415.001l1.517-1.517a2 2 0 0 1 2.828 0l2.794 2.793.364-.364a4 4 0 0 0 0-5.656m-1.778 7.434L14.5 10.884l-1.517 1.517a3 3 0 0 1-4.245-.002l-.035-.035a3 3 0 0 1 .003-4.24l1.88-1.88-.001-.001a4 4 0 0 0-5.657 5.656l7.071 7.072zM12 4.83l.001-.002a6 6 0 1 1 8.485 8.486L12 21.799l-8.485-8.485A6 6 0 0 1 12 4.828z"
        />
      </svg>
    );
  },
);

export default ProServiceLine;

import * as React from "react";
import { IconProps } from "./types";

export const ProSwordLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m7.3 3.204-.708-.293H4.471l-1 1v2.121l.293.708 5.127 5.126-2.829 2.828-1.414-1.414-1.414 1.415L5.71 17.17l-2.83 2.828 1.414 1.414 2.828-2.828 2.475 2.474 1.414-1.414-1.414-1.414 2.828-2.828 2.652 2.652-1.414 1.414 1.414 1.414 2.475-2.475 2.829 2.828 1.414-1.414-2.829-2.829 2.475-2.474-1.414-1.414-1.415 1.414-2.651-2.652 4.95-4.95.292-.707V4.088l-1-1h-2.121l-.707.293-4.95 4.95zm6.54 6.54 4.657-4.656h.707v.707l-4.657 4.657zm-2.828 4.244-2.828 2.828-.707-.707 2.828-2.829zM5.47 4.91h.707L17.2 15.932l-.707.707L5.47 5.62z"
        />
      </svg>
    );
  },
);

export default ProSwordLine;

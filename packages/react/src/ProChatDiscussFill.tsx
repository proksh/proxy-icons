import * as React from "react";
import { IconProps } from "./types";

export const ProChatDiscussFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="m1 3 1-1h17v2H3v11H1z" />
        <path fill={color} d="M23 6H5v13h6.448L14 22.062 16.552 19H23z" />
      </svg>
    );
  },
);

export default ProChatDiscussFill;

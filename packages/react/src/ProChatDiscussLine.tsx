import * as React from "react";
import { IconProps } from "./types";

export const ProChatDiscussLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M2 2 1 3v12h2V4h16V2z" />
        <path
          fill={color}
          d="M23 6H5v13h6.448L14 22.062 16.552 19H23zM7 17V8h14v9h-5.385L14 18.938 12.385 17z"
        />
      </svg>
    );
  },
);

export default ProChatDiscussLine;

import * as React from "react";
import { IconProps } from "./types";

export const ProGeminiLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 1 9.493 6.514a6 6 0 0 1-2.979 2.979L1 12l5.514 2.507a6 6 0 0 1 2.979 2.979L12 23l2.507-5.514a6 6 0 0 1 2.979-2.979L23 12l-5.514-2.507a6 6 0 0 1-2.979-2.979zm0 4.832.686 1.51a8 8 0 0 0 3.972 3.972l1.51.686-1.51.686a8 8 0 0 0-3.972 3.972L12 18.168l-.686-1.51a8 8 0 0 0-3.972-3.972L5.832 12l1.51-.686a8 8 0 0 0 3.972-3.972z"
        />
      </svg>
    );
  },
);

export default ProGeminiLine;

import * as React from "react";
import { IconProps } from "./types";

export const ProEmotionLaughLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.5 7C7.267 7 6.237 7.859 6 9l5-.008C10.76 7.855 9.733 7 8.5 7m7 0c-1.234 0-2.264.859-2.5 2l5-.008C17.76 7.855 16.733 7 15.5 7M12 17a5 5 0 0 0 5-5v-.004A13 13 0 0 0 12 11c-1.772 0-3.46.354-5 .996V12a5 5 0 0 0 5 5"
        />
        <path
          fill={color}
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProEmotionLaughLine;

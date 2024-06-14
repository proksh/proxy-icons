import * as React from "react";
import { IconProps } from "./types";

export const ProChatUploadFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm11.246 7.985h2.752l-4.012-4-3.991 4h2.751v4.007h2.5z"
        />
      </svg>
    );
  },
);

export default ProChatUploadFill;

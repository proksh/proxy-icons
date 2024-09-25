import * as React from "react";
import { IconProps } from "./types";

export const ProChatVoiceFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 3h20v16h-7.52L12 22.1 9.52 19H2zm9 4v8h2V7zm4 2v4h2V9zm-8 4h2V9H7z"
        />
      </svg>
    );
  },
);

export default ProChatVoiceFill;

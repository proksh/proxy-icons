import * as React from "react";
import { IconProps } from "./types";

export const ProUserSettingsFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 7a5 5 0 1 1 10 0A5 5 0 0 1 5 7M1 19a5 5 0 0 1 5-5h6.134l-1.433 2.482 1.66.958a5 5 0 0 0 0 1.12l-1.66.958L12.134 22H1z"
        />
        <path
          fill={color}
          d="m14.476 15.198-1.409-.814-1 1.732 1.408.813a4 4 0 0 0 0 2.142l-1.408.813 1 1.732 1.409-.814a4 4 0 0 0 1.854 1.072V23.5h2v-1.626a4 4 0 0 0 1.854-1.072l1.41.814 1-1.732-1.409-.813a4 4 0 0 0 0-2.142l1.408-.813-1-1.732-1.409.813a4 4 0 0 0-1.854-1.071V12.5h-2v1.626a4 4 0 0 0-1.854 1.072M19.33 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        />
      </svg>
    );
  },
);

export default ProUserSettingsFill;

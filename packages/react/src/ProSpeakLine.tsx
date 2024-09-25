import * as React from "react";
import { IconProps } from "./types";

export const ProSpeakLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 2a8 8 0 0 0-5 14.245V22h9v-3h4v-4.882l2.46-1.23-2.507-3.762A8 8 0 0 0 9 2m-6 8a6 6 0 0 1 11.983-.455l.02.262 1.537 2.305-1.54.77V17h-4v3H6v-4.776l-.428-.299A5.99 5.99 0 0 1 3 10m18.753 10h-2.178A15.4 15.4 0 0 0 21 13.5c0-1.937-.355-3.79-1.004-5.5h2.122A17.5 17.5 0 0 1 23 13.5c0 2.297-.443 4.49-1.247 6.5"
        />
      </svg>
    );
  },
);

export default ProSpeakLine;

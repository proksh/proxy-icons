import * as React from "react";
import { IconProps } from "./types";

export const ProMentalHealthLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="m11 7.8-.268-.261a1.933 1.933 0 0 0-2.677 0 1.8 1.8 0 0 0 0 2.6L11 13l2.945-2.86c.74-.719.74-1.883 0-2.601a1.933 1.933 0 0 0-2.677 0z"
        />
        <path
          fill={color}
          d="M11 2a8 8 0 0 0-5 14.245V22h9v-3h4v-4.882l2.46-1.23-2.507-3.762A8 8 0 0 0 11 2m-6 8a6 6 0 0 1 11.983-.455l.02.262 1.537 2.305-1.54.77V17h-4v3H8v-4.776l-.428-.299A5.99 5.99 0 0 1 5 10"
        />
      </svg>
    );
  },
);

export default ProMentalHealthLine;

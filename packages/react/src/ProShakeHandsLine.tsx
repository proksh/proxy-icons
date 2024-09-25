import * as React from "react";
import { IconProps } from "./types";

export const ProShakeHandsLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.762 2.276a3.66 3.66 0 0 0-3.569.75l-1.457 1.3H.5v9.088l.785.785 3.636 3.723-.016.015 3.182 3.182a2.5 2.5 0 0 0 4.049-.742 2.5 2.5 0 0 0 2.828-1.414 2.5 2.5 0 0 0 2.829-1.415 2.5 2.5 0 0 0 2.643-3.804L23 12.035V5.273zm-2.238 2.243a1.66 1.66 0 0 1 1.621-.34L21 6.726v4.238l-1.898 1.265-7.083-6.576-3.888 3.402a.563.563 0 0 1-.746-.844zm4.988 8.036 2.182 2.2a.5.5 0 1 1-.707.707l-.298-.297.003-.002-3.89-3.89-1.413 1.415 3.479 3.479-.002.002a.5.5 0 1 1-.708.707l-.297-.297.002-.002-3.182-3.182-1.414 1.414 2.772 2.773-.002.002a.5.5 0 0 1-.666.744L9.56 15.516 8.145 16.93l2.066 2.066-.002.002a.5.5 0 0 1-.707.707l-1.857-1.856-4.218-4.319.009-.008-.936-.936v-6.26h3.994l-.44.394a2.563 2.563 0 0 0 3.394 3.842l2.532-2.216z"
        />
      </svg>
    );
  },
);

export default ProShakeHandsLine;

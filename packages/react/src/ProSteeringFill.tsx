import * as React from "react";
import { IconProps } from "./types";

export const ProSteeringFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4a8 8 0 0 0-8 8H2C2 6.477 6.477 2 12 2s10 4.477 10 10h-2a8 8 0 0 0-8-8m-7.802 9.779A8.01 8.01 0 0 0 11 19.939v2.012c-4.31-.428-7.813-3.592-8.752-7.73zM13 21.95v-2.012a8.01 8.01 0 0 0 6.802-6.16l1.95.443c-.939 4.138-4.442 7.302-8.752 7.73"
        />
        <path
          fill={color}
          d="M6 11h12v2c-1.287 0-2.541.43-3.46 1.247C13.637 15.048 13 16.271 13 18h-2c0-1.729-.638-2.952-1.54-3.753C8.542 13.43 7.288 13 6 13z"
        />
      </svg>
    );
  },
);

export default ProSteeringFill;

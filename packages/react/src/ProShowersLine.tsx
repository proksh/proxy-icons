import * as React from "react";
import { IconProps } from "./types";

export const ProShowersLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 4a5 5 0 0 1 4.733 3.384l.27.79.825-.124Q17.156 8 17.5 8a4.5 4.5 0 0 1 4.495 4.71l-.002.047.002.047Q22 12.901 22 13a4 4 0 0 1-3 3.874v2.043a6 6 0 0 0 4.995-6.162Q24 12.627 24 12.5a6.5 6.5 0 0 0-6.673-6.498A7.001 7.001 0 0 0 4.046 8.194 5.502 5.502 0 0 0 5 18.979v-2.013a3.5 3.5 0 0 1 .11-6.944l.892-.098L6 9a5 5 0 0 1 5-5"
        />
        <path fill={color} d="M7 16v4h2v-4zm4 7v-4h2v4zm4-7v4h2v-4z" />
      </svg>
    );
  },
);

export default ProShowersLine;

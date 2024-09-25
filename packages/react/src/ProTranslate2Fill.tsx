import * as React from "react";
import { IconProps } from "./types";

export const ProTranslate2Fill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.25 3.75V2h-2.5v1.75H2v2.5h9.526a16 16 0 0 1-2.563 4.216A19 19 0 0 1 7.359 8H4.567c.578 1.282 1.494 2.84 2.626 4.262-1.414 1.22-3.104 2.222-5.043 2.788l.7 2.4c2.342-.683 4.361-1.885 6.036-3.345.949.881 2.018 1.632 3.175 2.065l.878-2.34c-.762-.286-1.537-.811-2.285-1.496 1.697-1.948 2.886-4.127 3.533-6.084H16v-2.5zm5.416 14.5L14.61 21h-2.68l4.404-11.449h2.333L23.07 21h-2.678l-1.058-2.75zm.962-2.5h1.744l-.872-2.268z"
        />
      </svg>
    );
  },
);

export default ProTranslate2Fill;

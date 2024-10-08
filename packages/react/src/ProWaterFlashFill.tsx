import * as React from "react";
import { IconProps } from "./types";

export const ProWaterFlashFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.919 2.827a36 36 0 0 0-.933-.811 36 36 0 0 0-.803-.647l-.191-.15-.183.148q-.407.325-.803.663a40 40 0 0 0-3.753 3.68C6.227 6.866 5.178 8.204 4.382 9.599 3.592 10.978 3 12.5 3 14a9 9 0 1 0 18 0c0-1.537-.589-3.077-1.38-4.47-.798-1.405-1.848-2.74-2.876-3.886a38 38 0 0 0-2.825-2.817M13 7.5V12h2.5L11 18.5V14H8.5z"
        />
      </svg>
    );
  },
);

export default ProWaterFlashFill;

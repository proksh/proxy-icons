import * as React from "react";
import { IconProps } from "./types";

export const ProHourglassLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 2h16v2h-2v3l-.072.371c-.184.462-.482 1.2-1.291 2.152-.613.72-1.502 1.545-2.826 2.477 1.324.932 2.213 1.756 2.826 2.477.809.952 1.107 1.69 1.291 2.152L18 17v3h2v2H4v-2h2v-3c.027-.143.042-.305.096-.43q.019-.045.053-.115a6 6 0 0 1 .202-.38c.18-.317.46-.751.868-1.262.642-.803 1.601-1.792 2.997-2.813C8.82 10.979 7.86 9.99 7.219 9.187a10 10 0 0 1-.868-1.261 6 6 0 0 1-.255-.496C6.036 7.293 6.028 7.146 6 7V4H4zm4.087 4.934L8 6.774V4h8v2.805c-.147.353-.37.814-.887 1.422-.564.664-1.501 1.528-3.11 2.584-1.595-1.07-2.607-2.104-3.222-2.873a8 8 0 0 1-.694-1.004m0 10.132-.087.16V20h8v-2.805c-.147-.353-.37-.814-.887-1.422-.564-.664-1.501-1.528-3.11-2.584-1.595 1.07-2.607 2.104-3.222 2.873a8 8 0 0 0-.694 1.004"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ProHourglassLine;

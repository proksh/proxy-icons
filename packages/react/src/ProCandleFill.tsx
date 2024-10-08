import * as React from "react";
import { IconProps } from "./types";

export const ProCandleFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.6.797c-.329.328-.659.657-.97 1.003-.278.308-.65.742-1.024 1.24a11.3 11.3 0 0 0-1.061 1.677C8.253 5.3 8 5.992 8 6.687a3.814 3.814 0 0 0 3 3.726V12H6l-1 1v7H3v2h18v-2h-2v-7l-1-1h-5v-1.689a3.81 3.81 0 0 0 2.625-3.623c0-.696-.253-1.387-.545-1.971-.3-.6-.69-1.18-1.061-1.676-.375-.5-.746-.933-1.024-1.241-.314-.35-.646-.68-.979-1.011l-.203-.203zm.213 2.688c.188.221.398.478.606.756.331.441.645.916.872 1.37.236.471.334.834.334 1.077a1.813 1.813 0 0 1-3.625 0c0-.243.098-.606.334-1.077.227-.454.541-.929.872-1.37.208-.278.418-.535.607-.756"
        />
      </svg>
    );
  },
);

export default ProCandleFill;

import * as React from "react";
import { IconProps } from "./types";

export const ProBrainLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 2a4 4 0 0 1 3 1.354A4 4 0 0 1 19 6v1.506a5.25 5.25 0 0 1 1 8.867V17.5a4.5 4.5 0 0 1-8 2.829A4.5 4.5 0 0 1 4 17.5v-1.127a5.25 5.25 0 0 1 1-8.868V6a4 4 0 0 1 4-4m2 10.712V11.5q0-.094-.007-.187l-.005-.076.006-.076Q11 11.082 11 11V6a2 2 0 1 0-4 0v2.926l-.706.217a3.252 3.252 0 0 0-.764 5.865l.47.294V17.5a2.5 2.5 0 0 0 4.986.261c-.03-1.001-.13-1.84-.452-2.52-.379-.8-1.147-1.525-3.144-1.747l.22-1.988c1.458.162 2.569.577 3.39 1.206m2-1.212v1.212c.821-.63 1.932-1.044 3.39-1.206l.22 1.988c-1.997.222-2.765.948-3.144 1.747-.322.68-.422 1.519-.452 2.52A2.5 2.5 0 0 0 18 17.5v-2.198l.47-.294a3.252 3.252 0 0 0-.764-5.866L17 8.927V6a2 2 0 1 0-4 0v5q0 .082.006.161l.006.076-.005.076A3 3 0 0 0 13 11.5"
        />
      </svg>
    );
  },
);

export default ProBrainLine;

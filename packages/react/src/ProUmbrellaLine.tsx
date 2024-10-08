import * as React from "react";
import { IconProps } from "./types";

export const ProUmbrellaLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 3.045V2h2v1.045c4.445.4 8.128 3.445 9.463 7.55C22.81 11.666 23 12.81 23 14c0-.84-.907-1.56-2.192-1.855A6 6 0 0 0 19.5 12a5.5 5.5 0 0 0-1.977.35c-.92.36-1.523.965-1.523 1.65 0-.65-.62-1.227-1.58-1.592a6.3 6.3 0 0 0-1.42-.345V19a1 1 0 1 0 2 0v-2h2v2a3 3 0 1 1-6 0v-6.937a6.3 6.3 0 0 0-1.42.345C8.62 12.773 8 13.35 8 14c0-.685-.603-1.29-1.523-1.65A5.5 5.5 0 0 0 4.5 12c-.463 0-.904.051-1.309.145C1.907 12.44 1 13.16 1 14c0-1.189.189-2.333.537-3.406C2.872 6.49 6.555 3.445 11 3.044m-2.723 7.752C9.333 10.269 10.652 10 12 10s2.667.269 3.723.797q.102.051.21.11l.1-.058C17.02 10.285 18.25 10 19.5 10q.288 0 .575.02A9 9 0 0 0 12 5a9 9 0 0 0-8.074 5.02Q4.21 10 4.5 10c1.25 0 2.48.285 3.467.85l.1.058q.108-.06.21-.111"
        />
      </svg>
    );
  },
);

export default ProUmbrellaLine;

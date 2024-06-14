import * as React from "react";
import { IconProps } from "./types";

export const ProSunCloudyLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.501 3.586V1.368h2v2.218zm-2.895 3.289a4.696 4.696 0 0 1 8.406 3.934 6 6 0 0 1 2.984 5.423q.004.11.004.223A5.545 5.545 0 0 1 17.454 22H8.819a7.818 7.818 0 1 1 2.788-15.125m1.776.958a7.9 7.9 0 0 1 2.154 2.347 6 6 0 0 1 2.593-.074q.068-.293.068-.606a2.696 2.696 0 0 0-4.815-1.667m.75 3.973A5.82 5.82 0 0 0 3 14.182 5.82 5.82 0 0 0 8.818 20h8.637a3.546 3.546 0 0 0 3.54-3.72l-.001-.046.002-.047Q21 16.094 21 16a4 4 0 0 0-5.565-3.683l-.903.385zm9.5-3.306h-2.218v2h2.218z"
        />
        <path
          fill={color}
          d="M10.61 6.025 9.042 4.457l1.414-1.414 1.568 1.568zm9.933-2.982-1.568 1.569 1.414 1.414 1.568-1.568z"
        />
      </svg>
    );
  },
);

export default ProSunCloudyLine;

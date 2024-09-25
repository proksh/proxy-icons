import * as React from "react";
import { IconProps } from "./types";

export const ProShuffleLine = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.176 4.09c-3.164.328-5.189 1.512-6.538 2.984-.718.784-1.238 1.661-1.629 2.45-.355-.76-.822-1.612-1.49-2.414C8.068 5.37 5.782 4 2 4v2c3.217 0 4.93 1.129 5.982 2.39.546.655.94 1.38 1.265 2.09.152.33.285.65.415.962l.028.068q.102.248.208.49-.106.242-.208.49l-.028.068c-.13.312-.263.631-.415.963-.325.71-.72 1.434-1.265 2.089C6.93 16.872 5.217 18 2 18v2c3.783 0 6.07-1.372 7.518-3.11.669-.802 1.136-1.654 1.491-2.415.39.79.91 1.667 1.629 2.45 1.35 1.473 3.374 2.657 6.538 2.985l-1.383 1.383 1.414 1.414L22.914 19l-3.707-3.707-1.414 1.414 1.163 1.163c-2.472-.338-3.917-1.285-4.844-2.296-.911-.994-1.351-2.034-1.757-2.993q-.125-.296-.25-.581.125-.285.25-.58c.406-.96.846-2 1.757-2.994.927-1.011 2.372-1.958 4.844-2.296l-1.163 1.163 1.414 1.414L22.914 5l-3.707-3.707-1.414 1.414z"
        />
      </svg>
    );
  },
);

export default ProShuffleLine;

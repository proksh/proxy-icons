import * as React from "react";
import { IconProps } from "./types";

export const ProStickerFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.073 3h-.146c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31-.802.802-1.147 1.813-1.309 3.013C3 8.634 3 10.103 3 11.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C8.634 21 10.103 21 11.927 21h1.487L21 13.414v-1.487c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.812-1.147-3.013-1.309C15.366 3 13.897 3 12.073 3M19 12v.586L12.586 19H12v-6l1-1z"
        />
      </svg>
    );
  },
);

export default ProStickerFill;

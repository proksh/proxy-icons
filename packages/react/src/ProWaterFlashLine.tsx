import * as React from "react";
import { IconProps } from "./types";

export const ProWaterFlashLine = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path fill={color} d="M13 7.5 8.5 14H11v4.5l4.5-6.5H13z" />
        <path
          fill={color}
          d="M12.986 2.016a23 23 0 0 0-.777-.626l-.217-.172-.722.588q-.095.078-.264.224a40 40 0 0 0-3.753 3.68C6.227 6.866 5.178 8.204 4.382 9.599 3.592 10.978 3 12.5 3 14a9 9 0 1 0 18 0c0-1.537-.589-3.077-1.38-4.47-.798-1.405-1.848-2.74-2.876-3.886a38 38 0 0 0-3.758-3.628m-.979 1.793q-.252.221-.581.522a38 38 0 0 0-2.679 2.708c-.974 1.096-1.925 2.32-2.629 3.55C5.408 11.835 5 13 5 14a7 7 0 1 0 14 0c0-1.047-.411-2.235-1.12-3.483-.702-1.236-1.652-2.453-2.624-3.537a36 36 0 0 0-3.249-3.171"
        />
      </svg>
    );
  },
);

export default ProWaterFlashLine;

import * as React from "react";
import { IconProps } from "./types";

export const ProChatQuestionnaireLine = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
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
        d="M12 8a1.5 1.5 0 0 0-1.47 1.199L8.57 8.8A3.5 3.5 0 1 1 12 13h-1v-2h1a1.5 1.5 0 0 0 0-3m-1 8v-2h2v2z"
      />
      <path
        fill={color}
        d="M22 3H2v16h7.52L12 22.1l2.48-3.1H22zM4 17V5h16v12h-6.48L12 18.9 10.48 17z"
      />
    </svg>
  );
});

export default ProChatQuestionnaireLine;

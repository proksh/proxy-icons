import * as React from "react";
import { IconProps } from "./types";

export const ProChatQuestionAnswerLine = React.forwardRef<
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
        d="M18 2H1v16.635L5.362 15H18zM3 14.365V4h13v9H4.638z"
      />
      <path fill={color} d="M8 17v2h9.638L22 22.635V8h-2v10.365L18.362 17z" />
    </svg>
  );
});

export default ProChatQuestionAnswerLine;
